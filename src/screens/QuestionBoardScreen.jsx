import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuestionBoardScreen = () => {
  const navigation = useNavigation();

  const renderPost = (user, time, content, imageUri) => (
    <TouchableOpacity style={styles.postCard} onPress={() => navigation.navigate('CommunityDetail')}>
      <View style={styles.header}>
        <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{user}</Text>
          <Text style={styles.timeAgo}>{time}</Text>
        </View>
        <Image source={require('../assets/image/dots.png')} style={styles.dots} />
      </View>
      <Text style={styles.postText}>{content}</Text>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.postImage} />
      )}
      <View style={styles.iconRow}>
        <Image source={require('../assets/image/eye.png')} style={styles.icon} />
        <Image source={require('../assets/image/comment.png')} style={styles.icon} />
        <Image source={require('../assets/image/heart.png')} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {renderPost('마뱀이', '1시간 전', '도마뱀의 섭식 습관에 대해 궁금한 점이 있습니다. 공유해주실 분 계신가요?', null)}
      {renderPost('마뱀이', '1시간 전', '볼파이썬 온도와 습도를 적정하게 유지하려면 어떻게 해야 하나요? 알려주세요!!', null)}
      {renderPost('마뱀이', '1시간 전', '파충류를 키울 때 가장 추천하는 종은 무엇인가요?', null)}
      {renderPost('게코러버', '2023년 10월 3일', '저는 도마뱀의 서식지에 대해 더 알고 싶어요.', 'https://image-resource.creatie.ai/148784308310686/148784308310688/f080697be3508b988f8b7b1a624f28d6.jpeg')}
    </ScrollView>
  );
};

export default QuestionBoardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { paddingBottom: 100 },
  postCard: { backgroundColor: '#fff', padding: 16, margin: 16, borderRadius: 12, elevation: 2 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  username: { fontSize: 14, fontWeight: '600' },
  timeAgo: { fontSize: 12, color: '#888' },
  dots: { width: 20, height: 20 },
  postText: { fontSize: 13, marginBottom: 10, fontFamily: 'Pompiere' },
  postImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 12 },
  iconRow: { flexDirection: 'row', justifyContent: 'flex-end' },
  icon: { width: 16, height: 16, marginLeft: 16 }
});
