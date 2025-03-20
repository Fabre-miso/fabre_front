import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '환경설정',
      headerTitleAlign: 'center',
      headerTitleStyle: { fontSize: 20, fontWeight: '600' },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const [isPushEnabled, setPushEnabled] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isDndEnabled, setDndEnabled] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.settingBox}>
        <View style={styles.settingRow}>
          <Icon name="notifications" size={20} />
          <Text style={styles.settingText}>푸시 알림</Text>
          <Switch value={isPushEnabled} onValueChange={setPushEnabled} />
        </View>

        <View style={styles.settingRow}>
          <Icon name="color-palette" size={20} />
          <Text style={styles.settingText}>테마 설정</Text>
          <Switch value={isDarkTheme} onValueChange={setDarkTheme} />
        </View>

        <View style={styles.settingRow}>
          <Icon name="mail" size={20} />
          <Text style={styles.settingText}>문의하기</Text>
          <Text style={styles.settingValue}>example@email.com</Text>
        </View>

        <View style={styles.settingRow}>
          <Icon name="information-circle" size={20} />
          <Text style={styles.settingText}>버전</Text>
        </View>

        <View style={styles.settingRow}>
          <Icon name="moon" size={20} />
          <Text style={styles.settingText}>방해금지 모드</Text>
          <Switch value={isDndEnabled} onValueChange={setDndEnabled} />
        </View>

        {isDndEnabled && (
          <View style={styles.dndTimeContainer}>
            <View style={styles.timeInput}>
              <Text>시작 시간</Text>
              <TextInput placeholder="22:00" style={styles.timeBox} />
            </View>

            <View style={styles.timeInput}>
              <Text>종료 시간</Text>
              <TextInput placeholder="07:00" style={styles.timeBox} />
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.logoutBtn}>
          <Icon name="exit" size={20} color="#e74c3c" />
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.withdrawBtn}>
        <Text style={styles.withdrawText}>탈퇴하기</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#f9f9f9'
  },
  settingBox: {
    backgroundColor: '#fff', borderRadius: 10, padding: 15, elevation: 2
  },
  settingRow: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 10
  },
  settingText: {
    flex: 1, fontSize: 16, paddingHorizontal: 10
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
  logoutBtn: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 10
  },
  logoutText: {
    color: '#e74c3c', marginLeft: 10
  },
  withdrawBtn: {
    alignItems: 'center', marginTop: 30
  },
  withdrawText: {
    color: '#bbb'
  }
});

export default SettingScreen;