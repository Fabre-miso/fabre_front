import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FreeBoardScreen = () => {
  const navigation = useNavigation();

  const renderPost = (user, text, image) => (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => navigation.navigate('CommunityDetail')}
    >
      <View style={styles.header}>
        <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{user}</Text>
          <Text style={styles.timeAgo}>3시간 전</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/image/dots.png')} style={styles.dots} />
        </TouchableOpacity>
      </View>

      <Text style={styles.postText}>{text}</Text>

      <Image source={image} style={styles.postImage} />

      <View style={styles.iconRow}>
        <Image source={require('../assets/image/eye.png')} style={styles.icon} />
        <Image source={require('../assets/image/comment.png')} style={styles.icon} />
        <Image source={require('../assets/image/heart.png')} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {renderPost('게코러버', '크앙', require('../assets/image/post1.png'))}
      {renderPost('게코러버', '우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중!!', require('../assets/image/post2.png'))}
    </ScrollView>
  );
};

export default FreeBoardScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 100,
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
  },
  timeAgo: {
    fontSize: 12,
    color: '#888',
  },
  dots: {
    width: 20,
    height: 20,
  },
  postText: {
    fontSize: 13,
    marginBottom: 10,
    fontFamily: 'Pompiere',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 12,
  },
});
