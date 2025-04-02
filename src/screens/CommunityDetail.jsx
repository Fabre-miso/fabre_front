// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// const CommunityDetail = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.postCard}>
//         <View style={styles.header}>
//           <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
//           <View style={{ flex: 1 }}>
//             <Text style={styles.username}>게코러버</Text>
//             <Text style={styles.timeAgo}>3시간 전</Text>
//           </View>
//           <Image source={require('../assets/image/dots.png')} style={styles.dots} />
//         </View>

//         <Text style={styles.postText}>우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중 !!</Text>
//         <Image
//           source={{ uri: 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg' }}
//           style={styles.postImage}
//         />

//         <View style={styles.iconRow}>
//           <View style={styles.iconWithText}>
//             <Image source={require('../assets/image/eye.png')} style={styles.icon} />
//             <Text style={styles.iconText}>120</Text>
//           </View>
//           <View style={styles.iconWithText}>
//             <Image source={require('../assets/image/comment.png')} style={styles.icon} />
//             <Text style={styles.iconText}>5</Text>
//           </View>
//           <View style={styles.iconWithText}>
//             <Image source={require('../assets/image/heart.png')} style={styles.icon} />
//             <Text style={styles.iconText}>13</Text>
//           </View>
//         </View>
//       </View>

//       <Text style={styles.commentHeader}>댓글 5</Text>

//       {['게코마스터', '렙타일러', '뱀지니', '이구아나맘', '도마뱀조아'].map((user, index) => (
//         <View key={index} style={styles.commentRow}>
//           <Image source={require('../assets/image/defaultProfile.png')} style={styles.commentAvatar} />
//           <View style={{ flex: 1 }}>
//             <View style={styles.commentHeaderRow}>
//               <Text style={styles.commentUser}>{user}</Text>
//               <Text style={styles.commentTime}>30분 전</Text>
//             </View>
//             <Text style={styles.commentText}>정말 귀엽네요! 밥 먹는 모습 최고입니다.</Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default CommunityDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFAFA',
//     padding: 16,
//   },
//   postCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 24,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginRight: 10,
//   },
//   username: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   timeAgo: {
//     fontSize: 12,
//     color: '#888',
//   },
//   dots: {
//     width: 20,
//     height: 20,
//   },
//   postText: {
//     fontSize: 13,
//     marginBottom: 10,
//     fontFamily: 'Pompiere',
//   },
//   postImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 12,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     gap: 20,
//   },
//   iconWithText: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//     marginLeft: 12,
//   },
//   icon: {
//     width: 16,
//     height: 16,
//   },
//   iconText: {
//     fontSize: 12,
//     color: '#888',
//   },
//   commentHeader: {
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   commentRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   commentAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginRight: 10,
//   },
//   commentHeaderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   commentTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   commentText: {
//     fontSize: 13,
//     marginTop: 4,
//   },
// });
import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityDetail = () => {
  const navigation = useNavigation();
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(13);

  const comments = [
    { id: '1', user: '게코마스터', time: '30분 전', text: '와, 밥 먹는 모습도 이렇게 귀엽다니! 🥰' },
    { id: '2', user: '렙타일러', time: '45분 전', text: '레오파드 게코 밥 먹을 때 진짜 힐링 돼요! 🍴🦎' },
    { id: '3', user: '뱀지니', time: '1시간 전', text: '혹시 사료 추천해 주실 수 있나요? 너무 잘 먹는 것 같아요!' },
    { id: '4', user: '이구아나맘', time: '1시간 전', text: '먹방 찍는 게코라니... 귀여움 폭발이에요! 😍' },
  ];

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      console.log('댓글 작성:', comment);
      setComment('');
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentRow}>
      <Image source={require('../assets/image/defaultProfile.png')} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentAuthor}>{item.user} <Text style={styles.commentTime}>{item.time}</Text></Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.postCard}>
          <View style={styles.header}>
            <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.username}>게코러버</Text>
              <Text style={styles.timeAgo}>3시간 전</Text>
            </View>
            <TouchableOpacity>
              <Image source={require('../assets/image/dots.png')} style={styles.dots} />
            </TouchableOpacity>
          </View>

          <Text style={styles.postText}>우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중 !!</Text>

          <Image
            source={{ uri: 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg' }}
            style={styles.postImage}
          />

          <View style={styles.iconRow}>
            <View style={styles.iconWithText}>
              <Image source={require('../assets/image/eye.png')} style={styles.icon} />
              <Text style={styles.iconText}>120</Text>
            </View>
            <View style={styles.iconWithText}>
              <Image source={require('../assets/image/comment.png')} style={styles.icon} />
              <Text style={styles.iconText}>{comments.length}</Text>
            </View>
            <TouchableOpacity onPress={handleLike} style={styles.iconWithText}>
              <Image
                source={require('../assets/image/heart.png')}
                style={[styles.icon, liked && { tintColor: 'red' }]}
              />
              <Text style={styles.iconText}>{likes}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.commentTitle}>댓글 {comments.length}</Text>

        <FlatList
          data={comments}
          keyExtractor={item => item.id}
          renderItem={renderComment}
          contentContainerStyle={styles.commentList}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={comment}
            onChangeText={setComment}
            placeholder="댓글을 입력하세요"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={handleCommentSubmit}>
            <Text style={styles.sendButton}>등록</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    elevation: 2,
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
    alignItems: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  iconText: {
    fontSize: 12,
    color: '#888',
  },
  commentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 10,
  },
  commentList: {
    paddingHorizontal: 16,
    paddingBottom: 70,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: '600',
  },
  commentTime: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#888',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    color: '#5DB374',
    fontWeight: '600',
  },
});

export default CommunityDetail;
