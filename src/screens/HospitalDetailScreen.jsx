import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

const HospitalDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('16');
  const [memo, setMemo] = useState('');
  const [photo, setPhoto] = useState(null);

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekDates = ['13', '14', '15', '16', '17', '18', '19'];

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>병원</Text>
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
            <TouchableOpacity key={date} onPress={() => setSelectedDate(date)}>
              <View style={[styles.dateCircle, date === selectedDate && styles.selectedDate]}>
                <Text style={[styles.dateText, date === selectedDate && styles.selectedDateText]}>{date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 병원 사진 업로드 */}
      <TouchableOpacity onPress={handlePickImage} style={styles.photoBox}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Image source={require('../assets/image/camera.png')} style={styles.cameraIcon} />
        )}
      </TouchableOpacity>

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

export default HospitalDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },

  calendarContainer: {
    marginTop: 12,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
  },
  calendarTitle: { fontSize: 16, marginBottom: 8, color: '#333', textAlign: 'center' },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  weekDay: { color: '#999', textAlign: 'center', flex: 1 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dateCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDate: { backgroundColor: '#5DB374' },
  dateText: { color: '#333' },
  selectedDateText: { color: '#fff', fontWeight: 'bold' },

  photoBox: {
    marginTop: 30,
    marginHorizontal: 20,
    height: 260, // 기존보다 크게
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  cameraIcon: { width: 52, height: 52, tintColor: '#aaa' },

  memoLabel: {
    marginTop: 30,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D3D3D',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  memoInput: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 22,
    height: 160, // 더 큰 메모 칸
    textAlignVertical: 'top',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#5DB374',
    marginHorizontal: 40,
    borderRadius: 100,
    paddingVertical: 18,
    marginTop: 40,
    marginBottom: 50, // 전체 여백 조정
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
