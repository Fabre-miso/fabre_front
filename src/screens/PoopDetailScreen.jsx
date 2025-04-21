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

const PoopDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [count, setCount] = useState(0);
  const [memo, setMemo] = useState('');
  const today = '2025.03.16';
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDates = ['13', '14', '15', '16', '17', '18', '19'];
  const conditionOptions = ['건강한 변', '묽은 변', '설사', '혈변'];

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <ScrollView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>배변</Text>
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

      {/* 배변 상태 */}
      <Text style={styles.label}>배변 상태</Text>
      <View style={styles.conditionGrid}>
        {conditionOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.conditionItem, selectedCondition === option && styles.optionSelected]}
            onPress={() => setSelectedCondition(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 배변 횟수 */}
      <Text style={styles.label}>배변 횟수</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decrement} style={styles.counterButton}>
          <Text style={styles.counterSymbol}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity onPress={increment} style={styles.counterButton}>
          <Text style={styles.counterSymbol}>+</Text>
        </TouchableOpacity>
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

export default PoopDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20, backgroundColor: '#fff',
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },

  calendarContainer: {
    marginTop: 12, marginHorizontal: 20, padding: 16, backgroundColor: '#fff',
    borderRadius: 8, elevation: 1
  },
  calendarTitle: { fontSize: 16, marginBottom: 8, color: '#333', textAlign: 'center' },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  weekDay: { color: '#999', textAlign: 'center', flex: 1 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dateCircle: {
    width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center'
  },
  selectedDate: { backgroundColor: '#5DB374' },
  dateText: { color: '#333' },
  selectedDateText: { color: '#fff', fontWeight: 'bold' },

  label: {
    marginTop: 30, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#3D3D3D',
    marginHorizontal: 20, textAlign: 'center'
  },
  conditionGrid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',
    marginHorizontal: 20, backgroundColor: '#F6F6F6', borderRadius: 20, paddingVertical: 20
  },
  conditionItem: {
    width: '40%', height: 45, alignItems: 'center', justifyContent: 'center',
    marginVertical: 6, borderRadius: 12, backgroundColor: '#fff'
  },
  optionSelected: { backgroundColor: '#D0E9DB' },
  optionText: { fontSize: 16, color: '#585858', textAlign: 'center' },

  counterContainer: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    marginHorizontal: 20, backgroundColor: '#F6F6F6', borderRadius: 20, height: 80
  },
  counterButton: {
    width: 60, height: 60, alignItems: 'center', justifyContent: 'center'
  },
  counterSymbol: { fontSize: 32, color: '#3D3D3D' },
  counterText: { fontSize: 28, marginHorizontal: 20, color: '#3D3D3D' },

  memoLabel: {
    marginTop: 30, marginBottom: 12, fontSize: 16, fontWeight: 'bold', color: '#3D3D3D', marginHorizontal: 20, textAlign: 'center'
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
