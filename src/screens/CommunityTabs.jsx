// import React, { useState, useLayoutEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';
// import FreeBoardScreen from './FreeBoardScreen';
// import QuestionBoardScreen from './QuestionBoardScreen';
// import Fairscreen from './Fairscreen';

// const CommunityTabs = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState('자유게시판');

//   useLayoutEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, [navigation]);

//   useFocusEffect(
//     React.useCallback(() => {
//       const unsubscribe = navigation.addListener('beforeRemove', (e) => {
//         e.preventDefault();
//         navigation.navigate('홈');
//       });
//       return () => unsubscribe();
//     }, [navigation])
//   );

//   const renderTab = (label) => (
//     <TouchableOpacity onPress={() => setActiveTab(label)} style={styles.tabButton}>
//       <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>{label}</Text>
//       {activeTab === label && <View style={styles.activeUnderline} />}
//     </TouchableOpacity>
//   );

//   const renderScreen = () => {
//     switch (activeTab) {
//       case '자유게시판':
//         return <FreeBoardScreen />;
//       case '질문':
//         return <QuestionBoardScreen />;
//       case '박람회':
//         return <Fairscreen />;
//       default:
//         return <FreeBoardScreen />;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>커뮤니티</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <View style={styles.tabContainer}>
//         {renderTab('자유게시판')}
//         {renderTab('질문')}
//         {renderTab('박람회')}
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {renderScreen()}
//       </ScrollView>

//       {activeTab !== '박람회' && (
//         <TouchableOpacity
//           style={styles.writeButton}
//           onPress={() => navigation.navigate('WriteScreen')}
//         >
//           <Image source={require('../assets/image/write.png')} style={{ width: 50, height: 50 }} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default CommunityTabs;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FAFAFA' },
//   scrollContent: { paddingBottom: 100 },
//   customHeader: {
//     flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
//     paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20, backgroundColor: '#fff',
//     borderBottomWidth: 1, borderBottomColor: '#eee'
//   },
//   backIcon: { width: 24, height: 24, resizeMode: 'contain' },
//   headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },
//   tabContainer: {
//     flexDirection: 'row', justifyContent: 'center', paddingTop: 20,
//     paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#fff'
//   },
//   tabButton: { marginHorizontal: 40, alignItems: 'center' },
//   tabText: { fontSize: 15, color: '#4C4C57' },
//   activeTabText: { color: '#5DB374', fontWeight: '600' },
//   activeUnderline: { marginTop: 4, height: 2, width: 40, backgroundColor: '#5DB374', borderRadius: 1 },
//   placeholder: { fontSize: 16, color: '#aaa', textAlign: 'center', marginTop: 50 },
//   writeButton: {
//     position: 'absolute', bottom: 24, right: 24, width: 50, height: 50
//   },
// });
import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import FreeBoardScreen from './FreeBoardScreen';
import QuestionBoardScreen from './QuestionBoardScreen';
import Fairscreen from './Fairscreen';

const CommunityTabs = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('자유게시판');

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        navigation.navigate('홈');
      });
      return () => unsubscribe();
    }, [navigation])
  );

  const renderTab = (label) => (
    <TouchableOpacity onPress={() => setActiveTab(label)} style={styles.tabButton}>
      <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>{label}</Text>
      {activeTab === label && <View style={styles.activeUnderline} />}
    </TouchableOpacity>
  );

  const renderScreen = () => {
    switch (activeTab) {
      case '자유게시판':
        return <FreeBoardScreen />;
      case '질문':
        return <QuestionBoardScreen />;
      case '박람회':
        return <Fairscreen />;
      default:
        return <FreeBoardScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>커뮤니티</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabContainer}>
        {renderTab('자유게시판')}
        {renderTab('질문')}
        {renderTab('박람회')}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderScreen()}
      </ScrollView>

      {activeTab !== '박람회' && (
        <TouchableOpacity
          style={styles.writeButton}
          onPress={() => navigation.navigate('WriteScreen', { fromTab: activeTab })}
        >
          <Image source={require('../assets/image/write.png')} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommunityTabs;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { paddingBottom: 100 },
  customHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20, backgroundColor: '#fff',
    borderBottomWidth: 1, borderBottomColor: '#eee'
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },
  tabContainer: {
    flexDirection: 'row', justifyContent: 'center', paddingTop: 20,
    paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#fff'
  },
  tabButton: { marginHorizontal: 40, alignItems: 'center' },
  tabText: { fontSize: 15, color: '#4C4C57' },
  activeTabText: { color: '#5DB374', fontWeight: '600' },
  activeUnderline: { marginTop: 4, height: 2, width: 40, backgroundColor: '#5DB374', borderRadius: 1 },
  placeholder: { fontSize: 16, color: '#aaa', textAlign: 'center', marginTop: 50 },
  writeButton: {
    position: 'absolute', bottom: 24, right: 24, width: 50, height: 50
  },
});
