// // import React, { useLayoutEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CommunityMain = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState('자유게시판');

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: '커뮤니티',
//       headerTitleAlign: 'center',
//       headerTitleStyle: {
//         fontSize: 20,
//         fontWeight: '600',
//         paddingRight: 55,
//       },
//       headerShadowVisible: false,
//     });
//   }, [navigation]);

//   const renderTab = (label) => (
//     <TouchableOpacity onPress={() => setActiveTab(label)} style={styles.tabButton}>
//       <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
//         {label}
//       </Text>
//       {activeTab === label && <View style={styles.activeUnderline} />}
//     </TouchableOpacity>
//   );

//   const renderPost = (user, text, imageUri) => (
//     <View style={styles.postCard}>
//       <View style={styles.header}>
//         <Image source={require('../assets/image/defaultProfile.png')} style={styles.avatar} />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.username}>{user}</Text>
//           <Text style={styles.timeAgo}>3시간 전</Text>
//         </View>
//         <TouchableOpacity>
//           <Image source={require('../assets/image/dots.png')} style={styles.dots} />
//         </TouchableOpacity> 
//       </View>

//       <Text style={styles.postText}>{text}</Text>

//       <Image source={{ uri: imageUri }} style={styles.postImage} />

//       <View style={styles.iconRow}>
//         <View style={styles.iconWithText}>
//           <Image source={require('../assets/image/eye.png')} style={styles.icon} />
//           <Text style={styles.iconText}>120</Text>
//         </View>
//         <View style={styles.iconWithText}>
//           <Image source={require('../assets/image/comment.png')} style={styles.icon} />
//           <Text style={styles.iconText}>5</Text>
//         </View>
//         <View style={styles.iconWithText}>
//           <Image source={require('../assets/image/heart.png')} style={styles.icon} />
//           <Text style={styles.iconText}>13</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.tabContainer}>
//         {renderTab('자유게시판')}
//         {renderTab('질문')}
//         {renderTab('박람회')}
//       </View>

//       {activeTab === '자유게시판' && (
//         <>
//           {renderPost('게코러버', '크앙', 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg')}
//           {renderPost('게코러버', '우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중 !!', 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg')}
//         </>
//       )}

//       {activeTab === '질문' && (
//         <Text style={styles.placeholder}>질문 내용 (추후 구현)</Text>
//       )}

//       {activeTab === '박람회' && (
//         <Text style={styles.placeholder}>박람회 내용 (추후 구현)</Text>
//       )}
//     </ScrollView>
//   );
// };

// export default CommunityMain;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFAFA',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     paddingBottom: 8,
//   },
//   tabButton: {
//     marginHorizontal: 40,
//     alignItems: 'center',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   activeTabText: {
//     color: '#68936F',
//     fontWeight: 'bold',
//   },
//   activeUnderline: {
//     marginTop: 4,
//     height: 2,
//     width: 40,
//     backgroundColor: '#68936F',
//     borderRadius: 1,
//   },
//   postCard: {
//     backgroundColor: '#fff',
//     padding: 16,
//     margin: 16,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 5,
//     elevation: 1,
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
//   placeholder: {
//     fontSize: 16,
//     color: '#aaa',
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });
import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityMain = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('자유게시판');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '커뮤니티',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 55,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const renderTab = (label) => (
    <TouchableOpacity onPress={() => setActiveTab(label)} style={styles.tabButton}>
      <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
        {label}
      </Text>
      {activeTab === label && <View style={styles.activeUnderline} />}
    </TouchableOpacity>
  );

  const renderPost = (user, text, imageUri) => (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => navigation.navigate('CommunityDetail', {
        post: { user, text, imageUri, time: '3시간 전' }
      })}
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

      <Image source={{ uri: imageUri }} style={styles.postImage} />

      <View style={styles.iconRow}>
        <View style={styles.iconWithText}>
          <Image source={require('../assets/image/eye.png')} style={styles.icon} />
          <Text style={styles.iconText}>120</Text>
        </View>
        <View style={styles.iconWithText}>
          <Image source={require('../assets/image/comment.png')} style={styles.icon} />
          <Text style={styles.iconText}>5</Text>
        </View>
        <View style={styles.iconWithText}>
          <Image source={require('../assets/image/heart.png')} style={styles.icon} />
          <Text style={styles.iconText}>13</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        {renderTab('자유게시판')}
        {renderTab('질문')}
        {renderTab('박람회')}
      </View>

      {activeTab === '자유게시판' && (
        <>
          {renderPost('게코러버', '크앙', 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg')}
          {renderPost('게코러버', '우리 집 레오파드 게코, 오늘도 귀엽게 밥 먹는 중 !!', 'https://image-resource.creatie.ai/148784308310686/148784308310688/ba65cfd92b571505bc07e9caebd980eb.jpg')}
        </>
      )}

      {activeTab === '질문' && (
        <Text style={styles.placeholder}>질문 내용 (추후 구현)</Text>
      )}

      {activeTab === '박람회' && (
        <Text style={styles.placeholder}>박람회 내용 (추후 구현)</Text>
      )}
    </ScrollView>
  );
};

export default CommunityMain;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  tabButton: {
    marginHorizontal: 40,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#68936F',
    fontWeight: 'bold',
  },
  activeUnderline: {
    marginTop: 4,
    height: 2,
    width: 40,
    backgroundColor: '#68936F',
    borderRadius: 1,
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
    gap: 20,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 12,
  },
  icon: {
    width: 16,
    height: 16,
  },
  iconText: {
    fontSize: 12,
    color: '#888',
  },
  placeholder: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  },
});
