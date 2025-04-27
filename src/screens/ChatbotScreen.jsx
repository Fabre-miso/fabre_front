import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { API_KEY } from '@env';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    setCurrentTime(formattedTime);
  }, []);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: '너는 특수동물 전문 상담사야. 질문에 친절하고 전문적으로 답변해줘.' },
            { role: 'user', content: input },
          ],
          temperature: 0.7,
          stream: false,
        }),
      });

      const data = await response.json();
      console.log('💬 API 응답 결과:', data);

      if (data.error) {
        const errorMessage = {
          id: Date.now().toString() + '_error',
          text: `에러 발생: ${data.error.message}`,
          sender: 'bot',
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        const botMessage = {
          id: Date.now().toString() + '_bot',
          text: data.choices[0].message.content.trim(),
          sender: 'bot',
        };
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('❌ 에러 발생:', error);
      const errorMessage = {
        id: Date.now().toString() + '_error',
        text: '답변을 가져오는 중 오류가 발생했어요. 다시 시도해주세요.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      {item.sender === 'bot' && (
        <Image source={require('../assets/image/mong.png')} style={styles.avatar} />
      )}
      <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.botBubble]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>몽이톡</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatArea}
      />

      {loading && <ActivityIndicator size="small" color="#5DB374" style={{ margin: 10 }} />}

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="메세지를 입력하세요."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatbotScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  topBar: { height: 60, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', elevation: 2 },
  topBarTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },
  timeContainer: { marginTop: 10, alignItems: 'center' },
  timeText: { fontSize: 12, color: '#91929F' },
  chatArea: { padding: 16, paddingBottom: 100 },
  messageContainer: { flexDirection: 'row', marginBottom: 12, alignItems: 'flex-start' },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 8 },
  messageBubble: { padding: 10, borderRadius: 18, maxWidth: '75%' },
  botBubble: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 0, borderTopRightRadius: 18, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 },
  userBubble: { backgroundColor: 'rgba(93, 179, 116, 0.4)', alignSelf: 'flex-end', borderTopLeftRadius: 18, borderTopRightRadius: 0, borderBottomLeftRadius: 18, borderBottomRightRadius: 18 },
  botMessage: { flexDirection: 'row', alignSelf: 'flex-start' },
  userMessage: { flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end' },
  messageText: { fontSize: 14, color: '#3D3D3D' },
  inputArea: { flexDirection: 'row', padding: 10, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#DDD', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%' },
  input: { flex: 1, height: 40, borderRadius: 20, backgroundColor: '#F0F0F0', paddingHorizontal: 16 },
  sendButton: { marginLeft: 8, paddingHorizontal: 16, height: 40, backgroundColor: '#5DB374', borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  sendButtonText: { color: '#FFFFFF', fontSize: 14 },
});
