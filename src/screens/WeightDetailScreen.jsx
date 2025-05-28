import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WeightScreen = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState('');
  const [memo, setMemo] = useState('');

  const handleWeightChange = (change) => {
    const newWeight = parseFloat(weight || '0') + change;
    setWeight(newWeight.toFixed(1));
  };

  const resetWeight = () => setWeight('');
  const today = new Date().toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>체중</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 날짜 및 그래프 아이콘 */}
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>{today}</Text>
        <Image source={require('../assets/image/graph.png')} style={styles.chartIcon} />
      </View>

      {/* 타이틀 */}
      <Text style={styles.title}><Text style={styles.green}>뿌기</Text>의 체중</Text>

      {/* 체중 입력 */}
      <View style={styles.weightBox}>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="0.0"
          keyboardType="numeric"
          style={styles.weightInput}
        />
        <Text style={styles.unit}>g</Text>
      </View>

      {/* 증감 버튼 */}
      <View style={styles.adjustRow}>
        <View style={styles.adjustPair}>
          <TouchableOpacity style={styles.adjustButton} onPress={() => handleWeightChange(-0.1)}>
            <Text style={styles.adjustText}>-0.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adjustButton} onPress={() => handleWeightChange(-1)}>
            <Text style={styles.adjustText}>-1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adjustPair}>
          <TouchableOpacity style={styles.adjustButton} onPress={() => handleWeightChange(0.1)}>
            <Text style={styles.adjustText}>+0.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adjustButton} onPress={() => handleWeightChange(1)}>
            <Text style={styles.adjustText}>+1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adjustPair}>
          <TouchableOpacity style={styles.adjustButton} onPress={() => alert('완료')}>
            <Text style={styles.adjustText}>완료</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adjustButton} onPress={resetWeight}>
            <Text style={styles.adjustText}>리셋</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 메모 */}
      <Text style={styles.memoTitle}>메모</Text>
      <TextInput
        style={styles.memoInput}
        placeholder="추가사항이 있으면 적어주세요."
        multiline
        value={memo}
        onChangeText={setMemo}
      />

      {/* 완료 버튼 */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeightScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20, backgroundColor: '#fff',
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },
  dateRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
    paddingHorizontal: 30, alignItems: 'center'
  },
  dateText: { backgroundColor: '#F6F6F6', padding: 6, borderRadius: 16, color: '#3D3D3D' },
  chartIcon: { width: 20, height: 20 },
  title: { textAlign: 'center', marginTop: 30, fontSize: 20 },
  green: { color: '#5DB374' },
  weightBox: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#F6F6F6', marginHorizontal: 40, marginVertical: 30, borderRadius: 20, height: 130
  },
  weightInput: { fontSize: 40, width: 140, textAlign: 'center', color: '#333' },
  unit: { fontSize: 26, color: '#3D3D3D', marginLeft: 10 },
  adjustRow: {
    flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20,
    marginBottom: 40
  },
  adjustPair: {
    justifyContent: 'space-between', alignItems: 'center', height: 130
  },
  adjustButton: {
    backgroundColor: '#F6F6F6', borderRadius: 20, paddingVertical: 16, paddingHorizontal: 34,
    marginVertical: 6, minWidth: 90, alignItems: 'center'
  },
  adjustText: { fontSize: 17 },
  memoTitle: { marginLeft: 30, marginTop: 30, fontSize: 16, fontWeight: 'bold' },
  memoInput: {
    backgroundColor: '#F6F6F6', marginHorizontal: 20, borderRadius: 20, padding: 22,
    height: 140, textAlignVertical: 'top', fontSize: 16
  },
  submitButton: {
    backgroundColor: '#5DB374', marginHorizontal: 40, borderRadius: 100,
    paddingVertical: 18, marginTop: 40, marginBottom: 40, alignItems: 'center'
  },
  submitText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});
