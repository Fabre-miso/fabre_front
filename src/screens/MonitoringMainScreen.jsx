// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   Image,
// // } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// // const MonitoringMainScreen = () => {
// //   const navigation = useNavigation();
// //   const [selectedProfile, setSelectedProfile] = useState('뿌기');
// //   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
// //   const today = '2025.03.13';

// //   const profiles = [
// //     { name: '뿌기', image: require('../assets/image/user_pet1.png') },
// //     { name: '따기', image: require('../assets/image/user_pet2.png') },
// //     { name: '꾸기', image: require('../assets/image/user_pet3.png') },
// //   ];

// //   const buttons = [
// //     { label: '체중', screen: 'WeightScreen', icon: require('../assets/image/weight.png') },
// //     { label: '먹이', screen: 'FeedScreen', icon: require('../assets/image/feed.png') },
// //     { label: '배변', screen: 'PoopScreen', icon: require('../assets/image/poop.png') },
// //     { label: '병원', screen: 'HospitalScreen', icon: require('../assets/image/hospital.png') },
// //   ];

// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* 헤더 */}
// //       <View style={styles.customHeader}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>모니터링</Text>
// //         <View style={{ width: 24 }} />
// //       </View>


// //       {/* 프로필 선택 */}
// //       <View style={styles.profileRow}>
// //         {profiles.map((profile) => (
// //           <TouchableOpacity key={profile.name} onPress={() => setSelectedProfile(profile.name)}>
// //             <Image source={profile.image} style={styles.profileImage} />
// //             <Text style={[styles.profileLabel, selectedProfile === profile.name && styles.profileSelected]}>
// //               {profile.name}
// //             </Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {/* 달력 요약 or 전체 */}
// //       <TouchableOpacity onPress={() => setIsCalendarOpen(!isCalendarOpen)}>
// //         <View style={styles.calendarHeader}>
// //           <Text style={styles.calendarTitle}>2025년 3월</Text>
// //           <Text style={styles.calendarToggle}>{isCalendarOpen ? '▲' : '▼'}</Text>
// //         </View>
// //       </TouchableOpacity>

// //       <View style={styles.calendarBody}>
// //         {isCalendarOpen ? (
// //           <Text>전체 달력 표시</Text> // 실제 달력 구현 시 교체
// //         ) : (
// //           <Text>주간 달력 표시</Text>
// //         )}
// //       </View>

// //       {/* 상태 버튼 */}
// //       <View style={styles.buttonRow}>
// //         {buttons.map((btn) => (
// //           <TouchableOpacity
// //             key={btn.label}
// //             style={styles.statusButton}
// //             onPress={() => navigation.navigate(btn.screen)}
// //           >
// //             <Image source={btn.icon} style={styles.statusIcon} />
// //             <Text style={styles.statusLabel}>{btn.label}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {/* 기록 정보 */}
// //       <View style={styles.card}>
// //         <Text style={styles.dateText}>{today}</Text>
// //         <Text style={styles.recordText}>무게 4g</Text>
// //         <Text style={styles.recordText}>먹이: 귀뚜라미</Text>
// //       </View>

// //       {/* 메모 */}
// //       <View style={styles.card}>
// //         <Text style={styles.cardTitle}>메모</Text>
// //         <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
// //       </View>

// //       {/* AI 분석 결과 */}
// //       <View style={styles.card}>
// //         <Text style={styles.cardTitle}>AI 분석 결과</Text>
// //         <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // export default MonitoringMainScreen;

// // const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#FAFAFA',
// //     },
  
// //     // 상단 헤더 (뒤로가기 + 타이틀)
// //     customHeader: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       justifyContent: 'space-between',
// //       paddingTop: 12,
// //       paddingBottom: 12,
// //       paddingHorizontal: 20,
// //       backgroundColor: '#fff',
// //       borderBottomWidth: 1,
// //       borderBottomColor: '#eee',
// //     },
// //     backIcon: {
// //       width: 24,
// //       height: 24,
// //       resizeMode: 'contain',
// //     },
// //     headerTitle: {
// //       fontSize: 20,
// //       fontWeight: '600',
// //       color: '#424347',
// //     },
  
// //     // 프로필
// //     profileRow: {
// //       flexDirection: 'row',
// //       justifyContent: 'center',
// //       paddingVertical: 16,
// //       backgroundColor: '#fff',
// //     },
// //     profileImage: {
// //       width: 54,
// //       height: 54,
// //       borderRadius: 27,
// //       marginHorizontal: 12,
// //     },
// //     profileLabel: {
// //       textAlign: 'center',
// //       color: '#999',
// //       marginTop: 4,
// //       fontSize: 12,
// //     },
// //     profileSelected: {
// //       color: '#5DB374',
// //       fontWeight: 'bold',
// //     },
  
// //     // 달력 헤더
// //     calendarHeader: {
// //       flexDirection: 'row',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       backgroundColor: '#fff',
// //       paddingVertical: 12,
// //       borderBottomWidth: 1,
// //       borderColor: '#eee',
// //     },
// //     calendarTitle: {
// //       fontSize: 16,
// //       color: '#333',
// //       marginRight: 8,
// //     },
// //     calendarToggle: {
// //       fontSize: 14,
// //       color: '#999',
// //     },
// //     calendarBody: {
// //       alignItems: 'center',
// //       padding: 12,
// //     },
  
// //     // 상태 버튼
// //     buttonRow: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-around',
// //       marginTop: 10,
// //       marginBottom: 20,
// //     },
// //     statusButton: {
// //       backgroundColor: '#fff',
// //       borderRadius: 8,
// //       width: 78,
// //       height: 88,
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       elevation: 1,
// //     },
// //     statusIcon: {
// //       width: 24,
// //       height: 24,
// //       marginBottom: 8,
// //     },
// //     statusLabel: {
// //       fontSize: 14,
// //       color: '#333',
// //     },
  
// //     // 카드 (기록, 메모, AI 결과)
// //     card: {
// //       backgroundColor: '#fff',
// //       marginHorizontal: 16,
// //       marginBottom: 12,
// //       padding: 16,
// //       borderRadius: 8,
// //       elevation: 1,
// //     },
// //     dateText: {
// //       color: '#999',
// //       marginBottom: 8,
// //     },
// //     recordText: {
// //       fontSize: 15,
// //       marginBottom: 4,
// //     },
// //     cardTitle: {
// //       fontWeight: '600',
// //       marginBottom: 8,
// //       fontSize: 15,
// //       color: '#333',
// //     },
// //     cardContent: {
// //       color: '#4B5563',
// //       fontSize: 14,
// //       lineHeight: 20,
// //     },
// //   });
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const MonitoringMainScreen = () => {
//   const navigation = useNavigation();
//   const [selectedProfile, setSelectedProfile] = useState('뿌기');
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const today = '2025.03.13';

//   const profiles = [
//     { name: '뿌기', image: require('../assets/image/user_pet1.png') },
//     { name: '따기', image: require('../assets/image/user_pet2.png') },
//     { name: '꾸기', image: require('../assets/image/user_pet3.png') },
//   ];

//   const buttons = [
//     { label: '체중', screen: 'WeightScreen', icon: require('../assets/image/weight.png') },
//     { label: '먹이', screen: 'FeedScreen', icon: require('../assets/image/feed.png') },
//     { label: '배변', screen: 'PoopScreen', icon: require('../assets/image/poop.png') },
//     { label: '병원', screen: 'HospitalScreen', icon: require('../assets/image/hospital.png') },
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       {/* 헤더 */}
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>모니터링</Text>
//         <View style={{ width: 24 }} />
//       </View>


//       {/* 프로필 선택 */}
//       <View style={styles.profileRow}>
//         {profiles.map((profile) => (
//           <TouchableOpacity key={profile.name} onPress={() => setSelectedProfile(profile.name)}>
//             <Image source={profile.image} style={styles.profileImage} />
//             <Text style={[styles.profileLabel, selectedProfile === profile.name && styles.profileSelected]}>
//               {profile.name}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* 달력 요약 or 전체 */}
//       <TouchableOpacity onPress={() => setIsCalendarOpen(!isCalendarOpen)}>
//         <View style={styles.calendarHeader}>
//           <Text style={styles.calendarTitle}>2025년 3월</Text>
//           <Text style={styles.calendarToggle}>{isCalendarOpen ? '▲' : '▼'}</Text>
//         </View>
//       </TouchableOpacity>

//       <View style={styles.calendarBody}>
//         {isCalendarOpen ? (
//           <Text>전체 달력 표시</Text> // 실제 달력 구현 시 교체
//         ) : (
//           <Text>주간 달력 표시</Text>
//         )}
//       </View>

//       {/* 상태 버튼 */}
//       <View style={styles.buttonRow}>
//         {buttons.map((btn) => (
//           <TouchableOpacity
//             key={btn.label}
//             style={styles.statusButton}
//             onPress={() => navigation.navigate(btn.screen)}
//           >
//             <Image source={btn.icon} style={styles.statusIcon} />
//             <Text style={styles.statusLabel}>{btn.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* 기록 정보 */}
//       <View style={styles.card}>
//         <Text style={styles.dateText}>{today}</Text>
//         <Text style={styles.recordText}>무게 4g</Text>
//         <Text style={styles.recordText}>먹이: 귀뚜라미</Text>
//       </View>

//       {/* 메모 */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>메모</Text>
//         <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
//       </View>

//       {/* AI 분석 결과 */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>AI 분석 결과</Text>
//         <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default MonitoringMainScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FAFAFA',
//     },
  
//     // 상단 헤더 (뒤로가기 + 타이틀)
//     customHeader: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingTop: 12,
//       paddingBottom: 12,
//       paddingHorizontal: 20,
//       backgroundColor: '#fff',
//       borderBottomWidth: 1,
//       borderBottomColor: '#eee',
//     },
//     backIcon: {
//       width: 24,
//       height: 24,
//       resizeMode: 'contain',
//     },
//     headerTitle: {
//       fontSize: 20,
//       fontWeight: '600',
//       color: '#424347',
//     },
  
//     // 프로필
//     profileRow: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       paddingVertical: 16,
//       backgroundColor: '#fff',
//     },
//     profileImage: {
//       width: 54,
//       height: 54,
//       borderRadius: 27,
//       marginHorizontal: 12,
//     },
//     profileLabel: {
//       textAlign: 'center',
//       color: '#999',
//       marginTop: 4,
//       fontSize: 12,
//     },
//     profileSelected: {
//       color: '#5DB374',
//       fontWeight: 'bold',
//     },
  
//     // 달력 헤더
//     calendarHeader: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       paddingVertical: 12,
//       borderBottomWidth: 1,
//       borderColor: '#eee',
//     },
//     calendarTitle: {
//       fontSize: 16,
//       color: '#333',
//       marginRight: 8,
//     },
//     calendarToggle: {
//       fontSize: 14,
//       color: '#999',
//     },
//     calendarBody: {
//       alignItems: 'center',
//       padding: 12,
//     },
  
//     // 상태 버튼
//     buttonRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginTop: 10,
//       marginBottom: 20,
//     },
//     statusButton: {
//       backgroundColor: '#fff',
//       borderRadius: 8,
//       width: 78,
//       height: 88,
//       alignItems: 'center',
//       justifyContent: 'center',
//       elevation: 1,
//     },
//     statusIcon: {
//       width: 24,
//       height: 24,
//       marginBottom: 8,
//     },
//     statusLabel: {
//       fontSize: 14,
//       color: '#333',
//     },
  
//     // 카드 (기록, 메모, AI 결과)
//     card: {
//       backgroundColor: '#fff',
//       marginHorizontal: 16,
//       marginBottom: 12,
//       padding: 16,
//       borderRadius: 8,
//       elevation: 1,
//     },
//     dateText: {
//       color: '#999',
//       marginBottom: 8,
//     },
//     recordText: {
//       fontSize: 15,
//       marginBottom: 4,
//     },
//     cardTitle: {
//       fontWeight: '600',
//       marginBottom: 8,
//       fontSize: 15,
//       color: '#333',
//     },
//     cardContent: {
//       color: '#4B5563',
//       fontSize: 14,
//       lineHeight: 20,
//     },
//   });
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';

const MonitoringMainScreen = () => {
  const navigation = useNavigation();
  const [selectedProfile, setSelectedProfile] = useState('뿌기');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const profiles = [
    { name: '뿌기', image: require('../assets/image/user_pet1.png') },
    { name: '따기', image: require('../assets/image/user_pet2.png') },
    { name: '꾸기', image: require('../assets/image/user_pet3.png') },
  ];

  const buttons = [
    { label: '체중', screen: 'WeightScreen', icon: require('../assets/image/weight.png') },
    { label: '먹이', screen: 'FeedScreen', icon: require('../assets/image/feed.png') },
    { label: '배변', screen: 'PoopScreen', icon: require('../assets/image/poop.png') },
    { label: '병원', screen: 'HospitalDetailScreen', icon: require('../assets/image/hospital.png') },
  ];

  const renderWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);
  
    const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];
  
    return (
      <View style={styles.weekCalendarContainer}>
        <View style={styles.weekDayLabels}>
          {dayLabels.map((day, i) => (
            <Text key={i} style={styles.dayLabel}>{day}</Text>
          ))}
        </View>
        <View style={styles.weekDateRow}>
          {Array.from({ length: 7 }, (_, i) => {
            const date = new Date(sunday);
            date.setDate(sunday.getDate() + i);
            const isSelected = date.toDateString() === selectedDate.toDateString();
            const label = date.getDate();
  
            return (
              <TouchableOpacity key={i} onPress={() => setSelectedDate(date)}>
                <View style={[styles.dateCircle, isSelected && styles.selectedDateCircle]}>
                  <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };
  

  return (
    <ScrollView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>모니터링</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 프로필 선택 */}
      <View style={styles.profileRow}>
        {profiles.map((profile) => (
          <TouchableOpacity key={profile.name} onPress={() => setSelectedProfile(profile.name)}>
            <Image source={profile.image} style={styles.profileImage} />
            <Text style={[styles.profileLabel, selectedProfile === profile.name && styles.profileSelected]}>
              {profile.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 달력 헤더 */}
      <TouchableOpacity onPress={() => setIsCalendarOpen(!isCalendarOpen)}>
        <View style={styles.calendarHeader}>
          <Text style={styles.calendarTitle}>{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월</Text>
          <Text style={styles.calendarToggle}>{isCalendarOpen ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>

      {/* 달력 내용 */}
      <View style={styles.calendarBody}>
        {isCalendarOpen ? (
          <CalendarPicker
          onDateChange={setSelectedDate}
          selectedStartDate={selectedDate}
          allowRangeSelection={false}
          width={350}
          customDayHeadings={['일', '월', '화', '수', '목', '금', '토']}
          customMonthNames={[
            '1월', '2월', '3월', '4월', '5월', '6월',
            '7월', '8월', '9월', '10월', '11월', '12월'
          ]}
          previousTitle="이전"
          nextTitle="다음"
        />
        
        ) : (
          renderWeekDates()
        )}
      </View>

      {/* 상태 버튼 */}
      <View style={styles.buttonRow}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.label}
            style={styles.statusButton}
            onPress={() => navigation.navigate(btn.screen)}
          >
            <Image source={btn.icon} style={styles.statusIcon} />
            <Text style={styles.statusLabel}>{btn.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 기록 정보 */}
      <View style={styles.card}>
        <Text style={styles.dateText}>{selectedDate.toISOString().split('T')[0]}</Text>
        <Text style={styles.recordText}>무게 4g</Text>
        <Text style={styles.recordText}>먹이: 귀뚜라미</Text>
      </View>

      {/* 메모 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>메모</Text>
        <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
      </View>

      {/* AI 분석 결과 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>AI 분석 결과</Text>
        <Text style={styles.cardContent}>상태는 평소와 동일하고, 먹이를 잘 먹었으며, 활동량 체크와 건강한 상태라 판단됩니다.</Text>
      </View>
    </ScrollView>
  );
};

export default MonitoringMainScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backIcon: { width: 24, height: 24, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#424347' },
  profileRow: { flexDirection: 'row', justifyContent: 'center', paddingVertical: 16, backgroundColor: '#fff' },
  profileImage: { width: 54, height: 54, borderRadius: 27, marginHorizontal: 12 },
  profileLabel: { textAlign: 'center', color: '#999', marginTop: 4, fontSize: 12 },
  profileSelected: { color: '#5DB374', fontWeight: 'bold' },
  calendarHeader: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#fff', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee'
  },
  calendarTitle: { fontSize: 16, color: '#333', marginRight: 8 },
  calendarToggle: { fontSize: 14, color: '#999' },
  calendarBody: { alignItems: 'center', padding: 12 },
  weekRow: {
    flexDirection: 'row', justifyContent: 'space-around', width: '100%',
    backgroundColor: '#fff', paddingVertical: 8
  },
  weekCalendarContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    alignItems: 'center',
    width: '100%',
  },
  weekDayLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 4,
  },
  dayLabel: {
    width: 36,
    textAlign: 'center',
    color: '#999',
    fontSize: 13,
  },
  weekDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dateCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateCircle: {
    backgroundColor: '#5DB374',
  },
  dateText: {
    color: '#333',
    fontSize: 15,
  },
  selectedDateText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  weekDate: {
    fontSize: 16, color: '#333', padding: 8, width: 36, textAlign: 'center', borderRadius: 20
  },
  selectedWeekDate: {
    backgroundColor: '#5DB374', color: '#fff'
  },
  buttonRow: {
    flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 20
  },
  statusButton: {
    backgroundColor: '#fff', borderRadius: 8, width: 78, height: 88,
    alignItems: 'center', justifyContent: 'center', elevation: 1
  },
  statusIcon: { width: 24, height: 24, marginBottom: 8 },
  statusLabel: { fontSize: 14, color: '#333' },
  card: {
    backgroundColor: '#fff', marginHorizontal: 16, marginBottom: 12,
    padding: 16, borderRadius: 8, elevation: 1
  },
  dateText: { color: '#999', marginBottom: 8 },
  recordText: { fontSize: 15, marginBottom: 4 },
  cardTitle: { fontWeight: '600', marginBottom: 8, fontSize: 15, color: '#333' },
  cardContent: { color: '#4B5563', fontSize: 14, lineHeight: 20 }
});
