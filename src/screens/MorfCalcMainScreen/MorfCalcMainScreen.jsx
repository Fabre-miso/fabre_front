// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// const MORPH_LIST = [
//   '노말', '오레오', '화이트아웃', '스트라이프', '제로', '카라멜', '고스트', '아멜라니스틱'
// ];

// const MorfCalcMainScreen = () => {
//   const [selectedFather, setSelectedFather] = useState('');
//   const [selectedMother, setSelectedMother] = useState('');
//   const [showFatherList, setShowFatherList] = useState(false);
//   const [showMotherList, setShowMotherList] = useState(false);

//   const resetSelections = () => {
//     setSelectedFather('');
//     setSelectedMother('');
//     setShowFatherList(false);
//     setShowMotherList(false);
//   };

//   return (
//     <View style={styles.container}>
//       {/* 앱 바 */}
//       <View style={styles.appBar}>
//         <TouchableOpacity>
//           <Image source={require('../../assets/image/back.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <Text style={styles.appBarTitle}>모프 계산기</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>모프 조합 계산기</Text>

//           {/* 아빠 선택 */}
//           <View style={styles.selectorWrapper}>
//             <View style={styles.selectorLabelBox}>
//               <Text style={styles.selectorLabel}>아 빠</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.selectorInputBox}
//               onPress={() => setShowFatherList(!showFatherList)}
//             >
//               <Text style={styles.selectorPlaceholderCentered}>{selectedFather || '아빠 모프를 선택해주세요.'}</Text>
//               <Image source={require('../../assets/image/dropdown.png')} style={styles.dropdownIcon} />
//             </TouchableOpacity>
//             {showFatherList && (
//               <View style={styles.dropdownListInline}>
//                 {MORPH_LIST.map(item => (
//                   <TouchableOpacity
//                     key={item}
//                     style={styles.dropdownItem}
//                     onPress={() => {
//                       setSelectedFather(item);
//                       setShowFatherList(false);
//                     }}
//                   >
//                     <Text style={styles.dropdownItemText}>{item}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//             <View style={styles.resultBox}>
//               {selectedFather !== '' && (
//                 <Text style={styles.resultText}>선택된 아빠 모프: {selectedFather}</Text>
//               )}
//             </View>
//           </View>

//           {/* 엄마 선택 */}
//           <View style={styles.selectorWrapper}>
//             <View style={styles.selectorLabelBox}>
//               <Text style={styles.selectorLabel}>엄 마</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.selectorInputBox}
//               onPress={() => setShowMotherList(!showMotherList)}
//             >
//               <Text style={styles.selectorPlaceholderCentered}>{selectedMother || '엄마 모프를 선택해주세요.'}</Text>
//               <Image source={require('../../assets/image/dropdown.png')} style={styles.dropdownIcon} />
//             </TouchableOpacity>
//             {showMotherList && (
//               <View style={styles.dropdownListInline}>
//                 {MORPH_LIST.map(item => (
//                   <TouchableOpacity
//                     key={item}
//                     style={styles.dropdownItem}
//                     onPress={() => {
//                       setSelectedMother(item);
//                       setShowMotherList(false);
//                     }}
//                   >
//                     <Text style={styles.dropdownItemText}>{item}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )}
//             <View style={styles.resultBox}>
//               {selectedMother !== '' && (
//                 <Text style={styles.resultText}>선택된 엄마 모프: {selectedMother}</Text>
//               )}
//             </View>
//           </View>

//           <TouchableOpacity style={styles.deleteButton} onPress={resetSelections}>
//             <Text style={styles.deleteButtonText}>전체삭제</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.calculateButton}>
//             <Text style={styles.calculateButtonText}>계산하기</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   appBar: {
//     height: 56,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   appBarTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#424347',
//   },
//   scrollContent: {
//     padding: 16,
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 8,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#000',
//     marginBottom: 16,
//   },
//   selectorWrapper: {
//     marginBottom: 16,
//   },
//   selectorLabelBox: {
//     backgroundColor: '#5DB374',
//     borderRadius: 8,
//     paddingVertical: 6,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   selectorLabel: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   selectorInputBox: {
//     borderWidth: 1,
//     borderColor: '#5DB374',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   selectorPlaceholderCentered: {
//     color: 'rgba(61, 61, 61, 0.5)',
//     fontSize: 16,
//     flex: 1,
//     textAlign: 'center',
//   },
//   dropdownIcon: {
//     width: 24,
//     height: 24,
//     marginLeft: 8,
//   },
//   dropdownListInline: {
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     marginBottom: 8,
//   },
//   dropdownItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderBottomColor: '#E5E7EB',
//     borderBottomWidth: 1,
//   },
//   dropdownItemText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   resultBox: {
//     height: 100,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderStyle: 'dashed',
//     borderColor: '#5DB374',
//     marginBottom: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   resultText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   deleteButton: {
//     borderWidth: 1,
//     borderColor: '#5DB374',
//     borderRadius: 8,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   deleteButtonText: {
//     color: '#5DB374',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   calculateButton: {
//     backgroundColor: '#5DB374',
//     borderRadius: 8,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   calculateButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//   },
// });

// export default MorfCalcMainScreen;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const MORPH_LIST = [
  '노말', '오레오', '화이트아웃', '스트라이프', '제로', '카라멜', '고스트', '아멜라니스틱'
];

const MorfCalcMainScreen = () => {
  const navigation = useNavigation(); // 추가!!

  const [selectedFather, setSelectedFather] = useState('');
  const [selectedMother, setSelectedMother] = useState('');
  const [showFatherList, setShowFatherList] = useState(false);
  const [showMotherList, setShowMotherList] = useState(false);

  const resetSelections = () => {
    setSelectedFather('');
    setSelectedMother('');
    setShowFatherList(false);
    setShowMotherList(false);
  };

  const handleCalculate = () => {
    if (selectedFather && selectedMother) {
      navigation.navigate('MorfCalcResultScreen', {
        fatherMorph: selectedFather,
        motherMorph: selectedMother,
      });
    } else {
      alert('아빠와 엄마 모프를 모두 선택해주세요!');
    }
  };

  return (
    <View style={styles.container}>
      {/* 앱 바 */}
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Image source={require('../../assets/image/back.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>모프 계산기</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>모프 조합 계산기</Text>

          {/* 아빠 선택 */}
          <View style={styles.selectorWrapper}>
            <View style={styles.selectorLabelBox}>
              <Text style={styles.selectorLabel}>아 빠</Text>
            </View>
            <TouchableOpacity
              style={styles.selectorInputBox}
              onPress={() => setShowFatherList(!showFatherList)}
            >
              <Text style={styles.selectorPlaceholderCentered}>{selectedFather || '아빠 모프를 선택해주세요.'}</Text>
              <Image source={require('../../assets/image/dropdown.png')} style={styles.dropdownIcon} />
            </TouchableOpacity>
            {showFatherList && (
              <View style={styles.dropdownListInline}>
                {MORPH_LIST.map(item => (
                  <TouchableOpacity
                    key={item}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedFather(item);
                      setShowFatherList(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <View style={styles.resultBox}>
              {selectedFather !== '' && (
                <Text style={styles.resultText}>선택된 아빠 모프: {selectedFather}</Text>
              )}
            </View>
          </View>

          {/* 엄마 선택 */}
          <View style={styles.selectorWrapper}>
            <View style={styles.selectorLabelBox}>
              <Text style={styles.selectorLabel}>엄 마</Text>
            </View>
            <TouchableOpacity
              style={styles.selectorInputBox}
              onPress={() => setShowMotherList(!showMotherList)}
            >
              <Text style={styles.selectorPlaceholderCentered}>{selectedMother || '엄마 모프를 선택해주세요.'}</Text>
              <Image source={require('../../assets/image/dropdown.png')} style={styles.dropdownIcon} />
            </TouchableOpacity>
            {showMotherList && (
              <View style={styles.dropdownListInline}>
                {MORPH_LIST.map(item => (
                  <TouchableOpacity
                    key={item}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedMother(item);
                      setShowMotherList(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <View style={styles.resultBox}>
              {selectedMother !== '' && (
                <Text style={styles.resultText}>선택된 엄마 모프: {selectedMother}</Text>
              )}
            </View>
          </View>

          <TouchableOpacity style={styles.deleteButton} onPress={resetSelections}>
            <Text style={styles.deleteButtonText}>전체삭제</Text>
          </TouchableOpacity>
          
          {/* 계산하기 버튼 수정 */}
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>계산하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  appBar: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  icon: {
    width: 24,
    height: 24,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#424347',
  },
  scrollContent: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  selectorWrapper: {
    marginBottom: 16,
  },
  selectorLabelBox: {
    backgroundColor: '#5DB374',
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  selectorLabel: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  selectorInputBox: {
    borderWidth: 1,
    borderColor: '#5DB374',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  selectorPlaceholderCentered: {
    color: 'rgba(61, 61, 61, 0.5)',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  dropdownIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  dropdownListInline: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  resultBox: {
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#5DB374',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#5DB374',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  deleteButtonText: {
    color: '#5DB374',
    fontWeight: '600',
    fontSize: 14,
  },
  calculateButton: {
    backgroundColor: '#5DB374',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default MorfCalcMainScreen;
