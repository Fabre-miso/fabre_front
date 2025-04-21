// import React, { useLayoutEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CommunityDetail = () => {
//   const navigation = useNavigation();
//   const [comment, setComment] = useState('');
//   const [liked, setLiked] = useState(false);
//   const [likes, setLikes] = useState(13);

//   const comments = [
//     { id: '1', user: '게코마스터', time: '30분 전', text: '와, 밥 먹는 모습도 이렇게 귀엽다니! 🥰' },
//     { id: '2', user: '렙타일러', time: '45분 전', text: '레오파드 게코 밥 먹을 때 진짜 힐링 돼요! 🍴🦎' },
//     { id: '3', user: '뱀지니', time: '1시간 전', text: '혹시 사료 추천해 주실 수 있나요? 너무 잘 먹는 것 같아요!' },
//     { id: '4', user: '이구아나맘', time: '1시간 전', text: '먹방 찍는 게코라니... 귀여움 폭발이에요! 😍' },
//   ];

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikes(liked ? likes - 1 : likes + 1);
//   };

//   const handleCommentSubmit = () => {
//     if (comment.trim()) {
//       console.log('댓글 작성:', comment);
//       setComment('');
//     }
//   };

//   const renderComment = ({ item }) => (
//     <>
//       <View style={styles.commentRow}>
//         <Image source={require('../assets/image/defaultProfile.png')} style={styles.commentAvatar} />
//         <View style={styles.commentContent}>
//           <Text style={styles.commentAuthor}>
//             {item.user} <Text style={styles.commentTime}>{item.time}</Text>
//           </Text>
//           <Text style={styles.commentText}>{item.text}</Text>
//         </View>
//       </View>
//       {/* 댓글마다 구분선 추가 */}
//       <View style={styles.commentDivider} />
//     </>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <View style={styles.container}>
//         {/* 게시글 카드 */}
//         <View style={styles.postCard}>
//           <View style={styles.header}>
//             <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
//             <View style={{ flex: 1 }}>
//               <Text style={styles.username}>게코러버</Text>
//               <Text style={styles.timeAgo}>3시간 전</Text>
//             </View>
//             <TouchableOpacity>
//               <Image source={require('../assets/image/dots.png')} style={styles.dots} />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.postText}>우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중!!</Text>

//           <Image
//             source={{ uri: 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg' }}
//             style={styles.postImage}
//           />

//           <View style={styles.iconRow}>
//             <View style={styles.iconWithText}>
//               <Image source={require('../assets/image/eye.png')} style={styles.icon} />
//               <Text style={styles.iconText}>120</Text>
//             </View>
//             <View style={styles.iconWithText}>
//               <Image source={require('../assets/image/comment.png')} style={styles.icon} />
//               <Text style={styles.iconText}>{comments.length}</Text>
//             </View>
//             <TouchableOpacity onPress={handleLike} style={styles.iconWithText}>
//               <Image
//                 source={require('../assets/image/heart.png')}
//                 style={[styles.icon, liked && { tintColor: 'red' }]}
//               />
//               <Text style={styles.iconText}>{likes}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* 댓글 제목 */}
//         <Text style={styles.commentTitle}>댓글 {comments.length}</Text>

//         {/* 댓글 리스트 */}
//         <FlatList
//           data={comments}
//           keyExtractor={item => item.id}
//           renderItem={renderComment}
//           contentContainerStyle={styles.commentList}
//           showsVerticalScrollIndicator={false}
//         />

//         {/* 댓글 입력창 */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             value={comment}
//             onChangeText={setComment}
//             placeholder="댓글을 입력하세요"
//             style={styles.textInput}
//           />
//           <TouchableOpacity onPress={handleCommentSubmit}>
//             <Text style={styles.sendButton}>등록</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default CommunityDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFAFA',
//   },
//   postCard: {
//     backgroundColor: '#fff',
//     padding: 16,
//     margin: 16,
//     borderRadius: 12,
//     elevation: 2,
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
//     alignItems: 'center',
//   },
//   iconWithText: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 16,
//   },
//   icon: {
//     width: 16,
//     height: 16,
//     marginRight: 4,
//   },
//   iconText: {
//     fontSize: 12,
//     color: '#888',
//   },
//   commentTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginLeft: 16,
//     marginTop: 20, // 댓글 갯수와 게시글 사이 간격 넓힘
//     marginBottom: 10,
//   },
//   commentList: {
//     paddingHorizontal: 16,
//     paddingBottom: 100,
//   },
//   commentRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 12, // 댓글 간격 넓힘
//   },
//   commentAvatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     marginRight: 10,
//   },
//   commentContent: {
//     flex: 1,
//   },
//   commentAuthor: {
//     fontWeight: '600',
//   },
//   commentTime: {
//     fontWeight: 'normal',
//     fontSize: 12,
//     color: '#888',
//   },
//   commentText: {
//     marginTop: 4,
//   },
//   commentDivider: {
//     height: 1,
//     backgroundColor: '#eee',
//     marginTop: 12,
//   },
//   inputContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderTopWidth: 1,
//     borderColor: '#eee',
//     alignItems: 'center',
//   },
//   textInput: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     marginRight: 8,
//   },
//   sendButton: {
//     color: '#5DB374',
//     fontWeight: '600',
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
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityDetail = () => {
  const navigation = useNavigation();

  // 댓글과 좋아요 상태 관리
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: '게코마스터', time: '30분 전', text: '와, 밥 먹는 모습도 이렇게 귀엽다니! 🥰', liked: false },
    { id: '2', user: '렙타일러', time: '45분 전', text: '레오파드 게코 밥 먹을 때 진짜 힐링 돼요! 🍴🦎', liked: false },
    { id: '3', user: '뱀지니', time: '1시간 전', text: '혹시 사료 추천해 주실 수 있나요? 너무 잘 먹는 것 같아요!', liked: false },
    { id: '4', user: '이구아나맘', time: '1시간 전', text: '먹방 찍는 게코라니... 귀여움 폭발이에요! 😍', liked: false },
  ]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(13);

  // 팝업 모달 상태 관리
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  // 좋아요 버튼 클릭 핸들러
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // 댓글 작성 핸들러
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: (comments.length + 1).toString(),
        user: '나',
        time: '방금 전',
        text: comment,
        liked: false,
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  // 댓글 길게 누를 때 핸들러
  const handleLongPress = (item) => {
    setSelectedComment(item);
    setModalVisible(true);
  };

  // 댓글 삭제 핸들러
  const handleDeleteComment = () => {
    setComments(comments.filter(c => c.id !== selectedComment.id));
    setModalVisible(false);
  };

  // 댓글 좋아요 토글 핸들러
  const handleToggleCommentLike = () => {
    setComments(comments.map(c =>
      c.id === selectedComment.id ? { ...c, liked: !c.liked } : c
    ));
    setModalVisible(false);
  };

  // 댓글 수정 핸들러 (prompt 사용)
  const handleEditComment = () => {
    const newText = prompt('수정할 댓글을 입력하세요', selectedComment.text);
    if (newText !== null && newText.trim() !== '') {
      setComments(comments.map(c =>
        c.id === selectedComment.id ? { ...c, text: newText } : c
      ));
    }
    setModalVisible(false);
  };

  // 댓글 렌더링 함수
  const renderComment = ({ item }) => (
    <TouchableOpacity onLongPress={() => handleLongPress(item)}>
      <View style={styles.commentRow}>
        <Image source={require('../assets/image/defaultProfile.png')} style={styles.commentAvatar} />
        <View style={styles.commentContent}>
          <Text style={styles.commentAuthor}>{item.user} <Text style={styles.commentTime}>{item.time}</Text></Text>
          <Text>{item.text}</Text>
          {item.liked && <Text style={styles.likedText}>❤️ 좋아요 표시됨</Text>}
        </View>
      </View>
      <View style={styles.commentSeparator} />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>

        {/* 게시글 내용 영역 */}
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

        {/* 댓글 타이틀 */}
        <Text style={styles.commentTitle}>댓글 {comments.length}</Text>

        {/* 댓글 리스트 */}
        <FlatList
          data={comments}
          keyExtractor={item => item.id}
          renderItem={renderComment}
          contentContainerStyle={styles.commentList}
        />

        {/* 댓글 작성창 */}
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

        {/* 댓글 수정/삭제/좋아요 모달 */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleEditComment}><Text style={styles.modalButton}>댓글 수정</Text></TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteComment}><Text style={styles.modalButton}>댓글 삭제</Text></TouchableOpacity>
              <TouchableOpacity onPress={handleToggleCommentLike}><Text style={styles.modalButton}>좋아요 토글</Text></TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

      </View>
    </KeyboardAvoidingView>
  );
};

export default CommunityDetail;

// 스타일 정의
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  postCard: { backgroundColor: '#fff', padding: 16, margin: 16, borderRadius: 12, elevation: 2 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  username: { fontSize: 14, fontWeight: '600' },
  timeAgo: { fontSize: 12, color: '#888' },
  dots: { width: 20, height: 20 },
  postText: { fontSize: 13, marginBottom: 10, fontFamily: 'Pompiere' },
  postImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 12 },
  iconRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
  iconWithText: { flexDirection: 'row', alignItems: 'center', marginLeft: 16 },
  icon: { width: 16, height: 16, marginRight: 4 },
  iconText: { fontSize: 12, color: '#888' },
  commentTitle: { fontSize: 14, fontWeight: 'bold', marginLeft: 16, marginTop: 20, marginBottom: 10 },
  commentList: { paddingHorizontal: 16, paddingBottom: 70 },
  commentRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 12 },
  commentAvatar: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  commentContent: { flex: 1 },
  commentAuthor: { fontWeight: '600' },
  commentTime: { fontWeight: 'normal', fontSize: 12, color: '#888' },
  commentSeparator: { height: 1, backgroundColor: '#eee', marginTop: 12 },
  inputContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', backgroundColor: '#fff', padding: 12, borderTopWidth: 1, borderColor: '#eee', alignItems: 'center' },
  textInput: { flex: 1, height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, paddingHorizontal: 16, marginRight: 8 },
  sendButton: { color: '#5DB374', fontWeight: '600' },
  likedText: { fontSize: 12, color: 'red', marginTop: 4 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: 250, backgroundColor: '#fff', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalButton: { fontSize: 16, marginVertical: 10, fontWeight: 'bold' }
});