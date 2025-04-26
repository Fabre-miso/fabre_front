// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Share, ScrollView } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';

// const MORPH_INFO = {
//   '노말': { type: 'normal', description: '일반적인 모프입니다.' },
//   '오레오': { type: 'recessive', description: '오레오는 열성 유전형입니다.' },
//   '화이트아웃': { type: 'co-dominant', description: '화이트아웃은 공우성 유전형입니다.' },
//   '스트라이프': { type: 'co-dominant', description: '스트라이프는 공우성 유전형입니다.' },
//   '제로': { type: 'recessive', description: '제로는 열성 유전형입니다.' },
//   '카라멜': { type: 'recessive', description: '카라멜은 열성 유전형입니다.' },
//   '고스트': { type: 'recessive', description: '고스트는 열성 유전형입니다.' },
//   '아멜라니스틱': { type: 'recessive', description: '아멜라니스틱은 열성 유전형입니다.' },
// };

// const calculateAdvancedMorphResult = (father, mother) => {
//   const fatherInfo = MORPH_INFO[father];
//   const motherInfo = MORPH_INFO[mother];

//   if (!fatherInfo || !motherInfo) {
//     return [{ morph: '알 수 없음', probability: '100%' }];
//   }

//   if (fatherInfo.type === 'recessive' && motherInfo.type === 'recessive') {
//     return [{ morph: father, probability: '100%' }];
//   }

//   if (fatherInfo.type === 'recessive' || motherInfo.type === 'recessive') {
//     return [{ morph: `HET ${father}`, probability: '100%' }];
//   }

//   if (fatherInfo.type === 'co-dominant' && motherInfo.type === 'co-dominant') {
//     return [
//       { morph: `Super ${father}`, probability: '25%' },
//       { morph: `${father}`, probability: '50%' },
//       { morph: '노말', probability: '25%' },
//     ];
//   }

//   if (fatherInfo.type === 'co-dominant' || motherInfo.type === 'co-dominant') {
//     return [
//       { morph: `${father}`, probability: '50%' },
//       { morph: '노말', probability: '50%' },
//     ];
//   }

//   return [{ morph: '노말', probability: '100%' }];
// };

// const MorfCalcResultScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { fatherMorph, motherMorph } = route.params;
//   const results = calculateAdvancedMorphResult(fatherMorph, motherMorph);

//   const handleShare = async () => {
//     try {
//       const resultText = results.map(r => `${r.morph}: ${r.probability}`).join('\n');
//       await Share.share({
//         message: `모프 계산 결과:\n${resultText}`,
//       });
//     } catch (error) {
//       console.log('공유 오류:', error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.resultTitle}>모프 계산 결과</Text>
//         <Text style={styles.resultSummary}>
//           총 <Text style={styles.resultCount}>{results.length}</Text>개의 결과가 나왔습니다.
//         </Text>

//         <View style={styles.tableWrapper}>
//           <View style={styles.tableRowHeader}>
//             <Text style={styles.headerCell}>확률</Text>
//             <Text style={styles.headerCell}>유전자</Text>
//             <Text style={styles.headerCell}>설명</Text>
//           </View>
//           {results.map((item, idx) => (
//             <View key={idx} style={styles.tableRow}>
//               <Text style={styles.cell}>{item.probability}</Text>
//               <Text style={styles.cell}>{item.morph}</Text>
//               <Text style={styles.cell}>{MORPH_INFO[item.morph?.replace('HET ', '').replace('Super ', '')]?.description || '-'}</Text>
//             </View>
//           ))}
//         </View>

//         <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
//           <Text style={styles.buttonText}>다시 하기</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.button, { backgroundColor: '#ccc', marginTop: 8 }]} onPress={handleShare}>
//           <Text style={[styles.buttonText, { color: '#333' }]}>결과 공유하기</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 100,
//     paddingBottom: 50,
//     alignItems: 'center',
//     backgroundColor: '#fff'
//   },
//   card: {
//     width: 360,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     borderColor: '#E5E7EB',
//     borderWidth: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   resultTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: 8,
//   },
//   resultSummary: {
//     fontSize: 16,
//     color: '#4B5563',
//     marginBottom: 16,
//   },
//   resultCount: {
//     color: '#CF1616',
//     fontSize: 22,
//   },
//   tableWrapper: {
//     width: '100%',
//     marginTop: 16,
//     borderWidth: 1,
//     borderColor: '#9B9B9B',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   tableRowHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#F9FAFB',
//     borderBottomWidth: 1,
//     borderColor: '#9B9B9B',
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     padding: 8,
//     fontSize: 14,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 8,
//     fontSize: 14,
//   },
//   button: {
//     marginTop: 16,
//     backgroundColor: '#5DB374',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default MorfCalcResultScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const MORPH_INFO = {
  '노말': { type: 'normal' },
  '오레오': { type: 'recessive' },
  '화이트아웃': { type: 'co-dominant' },
  '스트라이프': { type: 'co-dominant' },
  '제로': { type: 'recessive' },
  '카라멜': { type: 'recessive' },
  '고스트': { type: 'recessive' },
  '아멜라니스틱': { type: 'recessive' },
};

const calculateAdvancedMorphResult = (father, mother) => {
  const fatherInfo = MORPH_INFO[father];
  const motherInfo = MORPH_INFO[mother];

  if (!fatherInfo || !motherInfo) {
    return [{ morph: '알 수 없음', probability: '100%' }];
  }

  if (fatherInfo.type === 'recessive' && motherInfo.type === 'recessive') {
    return [{ morph: father, probability: '100%' }];
  }

  if (fatherInfo.type === 'recessive' || motherInfo.type === 'recessive') {
    return [{ morph: `HET ${father}`, probability: '100%' }];
  }

  if (fatherInfo.type === 'co-dominant' && motherInfo.type === 'co-dominant') {
    return [
      { morph: `Super ${father}`, probability: '25%' },
      { morph: `${father}`, probability: '50%' },
      { morph: '노말', probability: '25%' },
    ];
  }

  if (fatherInfo.type === 'co-dominant' || motherInfo.type === 'co-dominant') {
    return [
      { morph: `${father}`, probability: '50%' },
      { morph: '노말', probability: '50%' },
    ];
  }

  return [{ morph: '노말', probability: '100%' }];
};

const MorfCalcResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fatherMorph, motherMorph } = route.params;
  const results = calculateAdvancedMorphResult(fatherMorph, motherMorph);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.resultTitle}>모프 계산 결과</Text>
        <Text style={styles.resultSummary}>
          총 <Text style={styles.resultCount}>{results.length}</Text>개의 결과가 나왔습니다.
        </Text>

        {/* 원형 스타일로 표현된 결과 영역 (색상 박스와 텍스트) */}
        <View style={styles.pieMockContainer}>
          {results.map((item, index) => (
            <View
              key={index}
              style={[styles.halfBlock, {
                backgroundColor: index % 2 === 0 ? '#CFF5D3' : '#FDF2AE'
              }]}
            >
              <Text style={styles.pieLabel}>{item.probability}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tableWrapper}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.headerCell}>확률</Text>
            <Text style={styles.headerCell}>유전자</Text>
            <Text style={styles.headerCell}>콤보</Text>
            <Text style={styles.headerCell}>/</Text>
          </View>
          {results.map((item, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.cell}>확률</Text>
              <Text style={styles.cell}>{item.morph}</Text>
              <Text style={styles.cell}>{2 - idx}</Text>
              <Text style={styles.cell}>1/2</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>다시 하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: 360,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  resultSummary: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 16,
  },
  resultCount: {
    color: '#CF1616',
    fontSize: 22,
  },
  pieMockContainer: {
    width: 270,
    height: 270,
    borderRadius: 135,
    overflow: 'hidden',
    marginBottom: 20,
  },
  halfBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  tableWrapper: {
    width: '100%',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#9B9B9B',
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderColor: '#9B9B9B',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 14,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    fontSize: 14,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#5DB374',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MorfCalcResultScreen;

