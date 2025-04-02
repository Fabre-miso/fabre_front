import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({ navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        title: '환경설정',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '600',
          paddingRight: 45,
        },
        headerShadowVisible: false,
      });
    }, [navigation]);

  const [isPushEnabled, setPushEnabled] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isDndEnabled, setDndEnabled] = useState(false);
  
    // 테마관리
    const lightTheme = {
      container: { backgroundColor: '#fff' },
      settingBox: { backgroundColor: '#FAFAFA' },
      settingRow: { backgroundColor: '#fff' },
      text: { color: '#000' },
      subText: { color: '#888' },
    };
    
    const darkTheme = {
      container: { backgroundColor: '#212121' },
      settingBox: { backgroundColor: '#1E1E1E' },
      settingRow: { backgroundColor: '#212121' },
      text: { color: '#fff' },
      subText: { color: '#aaa' },
    };

    const theme = isDarkTheme ? darkTheme : lightTheme;

  const CustomToggle = ({ value, onToggle }) => {
    return (
      <TouchableOpacity
        style={[styles.toggleContainer, value ? styles.toggleOn : styles.toggleOff]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <View style={[styles.toggleCircle, value ? styles.circleRight : styles.circleLeft]} />
      </TouchableOpacity>
    );
  };

  return (
  <View style={[styles.container, theme.container]}>

    <View style={[styles.settingBox, theme.settingBox]}>
  
      {/* 푸시 알림 */}
      <View style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting1.png')} style={styles.Icon} />
        <Text style={[styles.settingText, theme.text]}>푸시 알림</Text>
        <CustomToggle value={isPushEnabled} onToggle={() => setPushEnabled(prev => !prev)} />
      </View>
  
      {/* 테마 설정 */}
      <View style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting2.png')} style={styles.Icon} />
        <Text style={[styles.settingText, theme.text]}>테마 설정</Text>
        <CustomToggle value={isDarkTheme} onToggle={() => setDarkTheme(prev => !prev)} />
      </View>
  
      {/* 문의하기 */}
      <View style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting3.png')} style={styles.Icon} />
        <Text style={[styles.settingText, theme.text]}>문의하기</Text>
        <Text style={[styles.settingValue, theme.subText]}>example@email.com</Text>
      </View>
  
      {/* 버전 */}
      <View style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting4.png')} style={styles.Icon} />
        <Text style={[styles.settingText, theme.text]}>버전</Text>
      </View>
  
      {/* 방해금지 모드 */}
      <View style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting5.png')} style={styles.Icon} />
        <Text style={[styles.settingText, theme.text]}>방해금지 모드</Text>
        <CustomToggle value={isDndEnabled} onToggle={() => setDndEnabled(prev => !prev)} />
      </View>
  
      {/* 방해금지 시간 설정 */}
      {isDndEnabled && (
        <View style={styles.dndTimeContainer}>
          <View style={styles.timeInput}>
            <Text style={theme.text}>시작 시간</Text>
            <TextInput placeholder="22:00" placeholderTextColor={theme.subText.color} style={[styles.timeBox, theme.text]} />
          </View>
          <View style={styles.timeInput}>
            <Text style={theme.text}>종료 시간</Text>
            <TextInput placeholder="07:00" placeholderTextColor={theme.subText.color} style={[styles.timeBox, theme.text]} />
          </View>
        </View>
      )}
  
      {/* 로그아웃 */}
      <TouchableOpacity style={[styles.settingRow, theme.settingRow]}>
        <Image source={require('../assets/image/setting6.png')} style={styles.Icon} />
        <Text style={styles.logoutText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  
    {/* 탈퇴하기 */}
    <TouchableOpacity style={styles.withdrawBtn}>
      <Text style={[styles.withdrawText, theme.subText]}>탈퇴하기</Text>
    </TouchableOpacity>
  
  </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff'
  },
  settingBox: {
    backgroundColor: '#FAFAFA', borderRadius: 10, padding: 15, 
  },
  settingRow: {
    flexDirection: 'row', alignItems: 'center', padding: 6, margin: 10, height:60,backgroundColor: '#fff'
  },
  settingText: {
    flex: 1, fontSize: 14, paddingHorizontal: 15
  },
  settingValue: {
    color: '#888'
  },
  dndTimeContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10
  },
  timeInput: {
    flex: 1, alignItems: 'center'
  },
  timeBox: {
    width: '80%', borderWidth: 1, borderColor: '#ddd', padding: 5, borderRadius: 5, textAlign: 'center', marginTop: 5
  },
  logoutText: {
    color: '#e74c3c', marginLeft: 10
  },
  withdrawBtn: {
    alignItems: 'center', marginTop: 30
  },
  withdrawText: {
    color: '#bbb'
  },
  Icon: {
    width: 18, height: 18, marginLeft: 10
  },
  toggleContainer: {
    width: 50,
    height: 28,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  toggleOn: {
    backgroundColor: '#333',
  },
  toggleOff: {
    backgroundColor: '#ddd',
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 2,
  },
  circleLeft: {
    left: 2,
  },
  circleRight: {
    right: 2,
  },
  
});

export default SettingScreen;