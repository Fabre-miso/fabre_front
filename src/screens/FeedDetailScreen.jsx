import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState('');
  const [memo, setMemo] = useState('');
  const today = '2025.03.16';
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDates = ['13', '14', '15', '16', '17', '18', '19'];

  const feedOptions = ['귀두라미', '밀웜', '사료', '쥐', '야채', '기타'];
  const sizeOptionsTop = ['극소', '소'];
  const sizeOptionsBottom = ['중', '대'];

  return (
    <ScrollView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>먹이</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 주간 캘린더 */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>2025년 3월</Text>
        <View style={styles.weekRow}>
          {weekDays.map(day => (
            <Text key={day} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        <View style={styles.dateRow}>
          {weekDates.map(date => (
            <TouchableOpacity key={date}>
              <View style={[styles.dateCircle, date === '16' && styles.selectedDate]}>
                <Text style={[styles.dateText, date === '16' && styles.selectedDateText]}>{date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 먹이 종류 */}
      <Text style={styles.labelCenter}>먹이</Text>
      <View style={styles.gridBox}>
        {feedOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.optionGridItem, selectedFeed === option && styles.optionSelected]}
            onPress={() => setSelectedFeed(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 사이즈와 개수 */}
      <View style={styles.rowBetweenCentered}>
        <Text style={styles.labelColumn}>사이즈</Text>
        <Text style={styles.labelColumn}>개수</Text>
      </View>

      <View style={styles.rowBetweenTight}>
        <View style={styles.sizeGrid}>
          <View style={styles.sizeRow}>
            {sizeOptionsTop.map(size => (
              <TouchableOpacity
                key={size}
                style={[styles.sizeItem, selectedSize === size && styles.optionSelected]}
                onPress={() => setSelectedSize(size)}>
                <Text style={styles.optionText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.sizeRow}>
            {sizeOptionsBottom.map(size => (
              <TouchableOpacity
                key={size}
                style={[styles.sizeItem, selectedSize === size && styles.optionSelected]}
                onPress={() => setSelectedSize(size)}>
                <Text style={styles.optionText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TextInput
          style={styles.countInput}
          value={count}
          onChangeText={setCount}
          placeholder="입력하세요"
          keyboardType="numeric"
        />
      </View>

      {/* 메모 */}
      <Text style={styles.memoLabel}>메모</Text>
      <TextInput
        style={styles.memoInput}
        placeholder="추가사항이 있으면 적어주세요."
        multiline
        value={memo}
        onChangeText={setMemo}
      />

      {/* 완료 버튼 */}
      <TouchableOpacity style={styles.submitButton} onPress={() => alert('저장되었습니다')}>
        <Text style={styles.submitText}>완료</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FeedDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20, backgroundColor: '#fff',
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  backButton: { fontSize: 20 },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },

  calendarContainer: {
    marginTop: 12, marginHorizontal: 20, padding: 16, backgroundColor: '#fff',
    borderRadius: 8, elevation: 1
  },
  calendarTitle: { fontSize: 16, marginBottom: 8, color: '#333' },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  weekDay: { color: '#999', textAlign: 'center', flex: 1 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dateCircle: {
    width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center'
  },
  selectedDate: { backgroundColor: '#5DB374' },
  dateText: { color: '#333' },
  selectedDateText: { color: '#fff', fontWeight: 'bold' },

  labelCenter: {
    marginTop: 30, fontSize: 16, fontWeight: 'bold', color: '#3D3D3D', textAlign: 'center', flex: 1
  },
  labelColumn: {
    fontSize: 16, fontWeight: 'bold', color: '#3D3D3D', textAlign: 'center', flex: 1
  },
  rowBetweenCentered: {
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
    marginHorizontal: 20, marginTop: 30
  },
  memoLabel: {
    marginTop: 40, marginBottom: 12, fontSize: 16, fontWeight: 'bold', color: '#3D3D3D', textAlign: 'center'
  },

  gridBox: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
    marginHorizontal: 20, marginTop: 10, backgroundColor: '#F6F6F6', borderRadius: 20,
    paddingVertical: 20
  },
  optionGridItem: {
    width: '30%', height: 50, alignItems: 'center', justifyContent: 'center',
    marginVertical: 6, borderRadius: 12, backgroundColor: '#fff'
  },
  optionSelected: { backgroundColor: '#D0E9DB' },
  optionText: { fontSize: 16, color: '#585858', textAlign: 'center' },

  rowBetweenTight: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginHorizontal: 20, marginTop: 10
  },
  sizeGrid: {
    width: '45%', backgroundColor: '#F6F6F6', borderRadius: 20, paddingVertical: 10, height: 120,
    justifyContent: 'space-evenly'
  },
  sizeRow: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
  },
  sizeItem: {
    width: '40%', height: 40, backgroundColor: '#fff', borderRadius: 12,
    justifyContent: 'center', alignItems: 'center'
  },
  countInput: {
    backgroundColor: '#F6F6F6', borderRadius: 20, padding: 16, width: '45%',
    textAlign: 'center', fontSize: 16, height: 120, textAlignVertical: 'center'
  },
  memoInput: {
    backgroundColor: '#F6F6F6', marginHorizontal: 20, borderRadius: 20, padding: 22,
    height: 100, textAlignVertical: 'top', fontSize: 16
  },
  submitButton: {
    backgroundColor: '#5DB374', marginHorizontal: 40, borderRadius: 100,
    paddingVertical: 18, marginTop: 40, marginBottom: 40, alignItems: 'center'
  },
  submitText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});
