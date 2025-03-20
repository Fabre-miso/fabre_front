import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';

const PetRegister = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '등록하기',
      headerTitleAlign: 'center',
      headerLeftContainerStyle: { paddingLeft: 10 },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 35,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* 사진 추가 */}
        <TouchableOpacity style={styles.photoContainer}>
          <Image source={require('../assets/image/cameraIcon.png')} style={styles.cameraIcon} resizeMode="contain" />
          <Text style={styles.addPhotoText}>사진 추가</Text>
        </TouchableOpacity>

        {/* 이름 입력 */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>이름</Text>
          <TextInput style={styles.input} placeholder="반려동물의 이름을 입력하세요." />
        </View>

        {/* 종 입력 */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>종</Text>
          <TextInput style={styles.input} placeholder="반려동물의 종을 입력하세요" />
        </View>

        {/* 생년월일 */}
        <View style={styles.inputBlock}>
        <Text style={styles.label}>생년월일</Text>
          <TouchableOpacity style={styles.dateInput} onPress={() => setOpen(true)}>
            <Text>{formatDate(date)}</Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            locale="ko"
            theme="light"
            textColor="#5DB374"
            title="생년월일"
            confirmText="확인"
            cancelText="취소"
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => setOpen(false)}
          />
        </View>

        {/* 성별 선택 */}
        <Text style={styles.label}>성별</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'male' && styles.genderButtonSelected,
            ]}
            onPress={() => setSelectedGender('male')}
          >
            <Text style={[
              styles.genderText,
              selectedGender === 'male' && styles.genderTextSelected,
            ]}>
              수컷
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'female' && styles.genderButtonSelected,
            ]}
            onPress={() => setSelectedGender('female')}
          >
            <Text style={[
              styles.genderText,
              selectedGender === 'female' && styles.genderTextSelected,
            ]}>
              암컷
            </Text>
          </TouchableOpacity>
        </View>

        {/* 등록완료 */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>등록완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
    margin: 25,
    borderRadius: 10,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  cameraIcon: {
    width: '25%',
    height: '25%',
    marginBottom: 10,
  },
  addPhotoText: {
    color: '#999',
    fontSize: 14,
  },
  inputBlock: {
    width: '100%',
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 5,
    backgroundColor: '#fff'
  },
  dateInput: {
    width: '100%',
    height: 50,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#fff'
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  genderButton: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  genderButtonSelected: {
    backgroundColor: '#5DB374',
  },
  genderText: {
    color: '#A3A3A3',
  },
  genderTextSelected: {
    color: '#FFFFFF',
  },
  submitButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#5DB374',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  submitText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'regular',
  },
});

export default PetRegister;
