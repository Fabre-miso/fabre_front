import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Fairscreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('박람회');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '박람회',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 55,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault(); // 기본 동작 막고
        navigation.navigate('홈'); // 홈으로 이동
      });

      return () => unsubscribe();
    }, [navigation])
  );

  const renderTab = (label) => (
    <TouchableOpacity onPress={() => setActiveTab(label)} style={styles.tabButton}>
      <Text style={[styles.tabText, activeTab === label && styles.activeTabText]}>
        {label}
      </Text>
      {activeTab === label && <View style={styles.activeUnderline} />}
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 상단 탭 메뉴 */}
      <View style={styles.tabContainer}>
        {renderTab('자유게시판')}
        {renderTab('질문')}
        {renderTab('박람회')}
      </View>

      {/* 콘텐츠 영역 */}
      {activeTab === '박람회' && (
        <>
          <View style={styles.card}>
            <Image source={require('../assets/image/Fair1.png')} style={styles.image} />
            <Text style={styles.title}>제 34 렙타일페어 경주</Text>
            <Text style={styles.date}>2024.12.07 - 2024.12.08</Text>
            <Text style={styles.location}>경주 화백 컨벤션</Text>
          </View>

          <View style={styles.card}>
            <Image source={require('../assets/image/Fair2.png')} style={styles.image} />
            <Text style={styles.title}>제 33회 렙타일페어 군산</Text>
            <Text style={styles.date}>2024.11.30 - 2024.12.01</Text>
            <Text style={styles.location}>군산 새만금컨벤션</Text>
          </View>
        </>
      )}

      {activeTab === '자유게시판' && (
        <Text style={styles.placeholder}>자유게시판 내용 (추후 구현)</Text>
      )}
      {activeTab === '질문' && (
        <Text style={styles.placeholder}>질문 내용 (추후 구현)</Text>
      )}
    </ScrollView>
  );
};

export default Fairscreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabButton: {
    marginHorizontal: 40,
    alignItems: 'center',
    paddingBottom: 6,
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
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    color: '#666',
    marginBottom: 2,
  },
  location: {
    color: '#888',
  },
  placeholder: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  },
});
