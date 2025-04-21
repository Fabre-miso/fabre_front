// // WriteScreen.jsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const WriteScreen = () => {
//   const navigation = useNavigation();
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   // 글쓰기 완료 버튼 클릭 시 실행되는 함수
//   const handleComplete = () => {
//     console.log('제목:', title);
//     console.log('내용:', content);
//     navigation.goBack(); // 이전 화면으로 이동
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <View style={styles.container}>
//         {/* 상단 헤더 영역 */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>자유게시판</Text>
//           <View style={{ width: 24 }} />
//         </View>

//         {/* 제목 입력 필드 */}
//         <TextInput
//           value={title}
//           onChangeText={setTitle}
//           placeholder="제목을 입력해주세요."
//           style={styles.titleInput}
//         />

//         {/* 제목과 본문 사이 구분선 */}
//         <View style={styles.divider} />

//         {/* 본문 입력 필드 */}
//         <TextInput
//           value={content}
//           onChangeText={setContent}
//           placeholder="자유롭게 이야기를 나눠보세요.\n#파충류 #먹이 #온도"
//           multiline
//           textAlignVertical="top"
//           style={styles.contentInput}
//         />

//         {/* 하단 도구 및 완료 버튼 */}
//         <View style={styles.toolbar}>
//           <TouchableOpacity>
//             <Image source={require('../assets/image/gallery.png')} style={styles.toolIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={require('../assets/image/link.png')} style={styles.toolIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={require('../assets/image/hash.png')} style={styles.hashIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
//             <Text style={styles.completeText}>완료</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default WriteScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFAFA',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingTop: 12,
//     paddingBottom: 12,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#3D3D3D',
//   },
//   titleInput: {
//     fontSize: 15,
//     color: '#A3A3A3',
//     paddingHorizontal: 18,
//     paddingTop: 20,
//     backgroundColor: '#fff',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#D8D8D8',
//     marginHorizontal: 26,
//     marginTop: 12,
//   },
//   contentInput: {
//     flex: 1,
//     fontSize: 15,
//     color: '#A3A3A3',
//     padding: 18,
//     backgroundColor: '#fff',
//   },
//   toolbar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderColor: '#E5E7EB',
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     overflow: 'visible',
//   },
//   toolIcon: {
//     width: 25,
//     height: 25,
//     marginRight: 25,
//     resizeMode: 'contain',
//   },
//   hashIcon: {
//     width: 29, // hash 아이콘만 살짝 더 키움
//     height: 29,
//     marginRight: 23,
//     resizeMode: 'contain',
//   },
//   completeButton: {
//     backgroundColor: '#5DB374',
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     borderRadius: 4,
//     marginLeft: 'auto',
//   },
//   completeText: {
//     color: '#FFFAFA',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });
// WriteScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const WriteScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // 👈 여기 추가!
  const { fromTab } = route.params || {}; // 👈 탭 이름을 받아옴
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleComplete = () => {
    console.log('제목:', title);
    console.log('내용:', content);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        {/* 상단 헤더 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{fromTab || '게시판'}</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* 제목 입력 */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="제목을 입력해주세요."
          style={styles.titleInput}
        />

        <View style={styles.divider} />

        {/* 내용 입력 */}
        <TextInput
          value={content}
          onChangeText={setContent}
          placeholder="자유롭게 이야기를 나눠보세요.\n#파충류 #먹이 #온도"
          multiline
          textAlignVertical="top"
          style={styles.contentInput}
        />

        {/* 하단 툴바 */}
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Image source={require('../assets/image/gallery.png')} style={styles.toolIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/image/link.png')} style={styles.toolIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/image/hash.png')} style={styles.hashIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
            <Text style={styles.completeText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WriteScreen;

// ...styles 생략 (기존과 동일)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3D3D3D',
  },
  titleInput: {
    fontSize: 15,
    color: '#A3A3A3',
    paddingHorizontal: 18,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 26,
    marginTop: 12,
  },
  contentInput: {
    flex: 1,
    fontSize: 15,
    color: '#A3A3A3',
    padding: 18,
    backgroundColor: '#fff',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'visible',
  },
  toolIcon: {
    width: 25,
    height: 25,
    marginRight: 25,
    resizeMode: 'contain',
  },
  hashIcon: {
    width: 29, // hash 아이콘만 살짝 더 키움
    height: 29,
    marginRight: 23,
    resizeMode: 'contain',
  },
  completeButton: {
    backgroundColor: '#5DB374',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginLeft: 'auto',
  },
  completeText: {
    color: '#FFFAFA',
    fontSize: 16,
    fontWeight: '500',
  },
});
