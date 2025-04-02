import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Linking } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  // 사용자 입력 상태 관리
  const [form, setForm] = useState({ id: '', password: '', phone: '', code: '' });
  // 약관 동의 체크 상태 관리
  const [checked, setChecked] = useState({});

  // 입력 필드 변경 핸들러
  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // 약관 체크박스 토글
  const toggleAgreement = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 회원가입 완료 처리
  const handleSubmit = () => {
    Alert.alert('회원가입 완료', '회원가입이 성공적으로 완료되었습니다.');
    navigation.navigate('Login');
  };

  // 약관 항목 목록
  const terms = [
    { text: '(필수) 서비스 이용약관 동의', link: true },
    { text: '(필수) 개인정보 수집 및 이용 동의', link: true },
    { text: '(필수) 만 14세 이상', link: false },
    { text: '(선택) 마케팅 수신 동의', link: false },
    { text: '약관에 모두 동의', link: false },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* 상단 헤더 영역 */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>회원가입</Text>
      </View>

      {/* 헤더 아래 여백 */}
      <View style={styles.spacerLargeMore} />

      {/* 입력 폼 영역 */}
      <View style={styles.formSection}>
        {/* 아이디 입력 */}
        <Text style={styles.label}>아이디</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input230}
            placeholder="아이디를 입력해주세요"
            placeholderTextColor="#A3A3A3"
            value={form.id}
            onChangeText={(text) => handleInputChange('id', text)}
          />
          <TouchableOpacity style={styles.buttonGray}>
            <Text style={styles.buttonTextGray}>중복확인</Text>
          </TouchableOpacity>
        </View>

        {/* 비밀번호 입력 */}
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.inputFull}
          placeholder="비밀번호는 8자 이상, 특수기호 포함해주세요(@, #, !)"
          placeholderTextColor="#A3A3A3"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />

        {/* 휴대폰 번호 입력 */}
        <Text style={styles.label}>휴대폰 번호</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input230}
            placeholder="01012345678"
            placeholderTextColor="#A3A3A3"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
          />
          <TouchableOpacity style={styles.buttonGray}>
            <Text style={styles.buttonTextGray}>인증받기</Text>
          </TouchableOpacity>
        </View>

        {/* 인증번호 입력 */}
        <Text style={styles.label}>인증번호</Text>
        <TextInput
          style={styles.inputFull}
          placeholder="인증번호 4자리"
          placeholderTextColor="#A3A3A3"
          keyboardType="numeric"
          value={form.code}
          onChangeText={(text) => handleInputChange('code', text)}
        />
      </View>

      {/* 약관 동의 영역 */}
      <View style={styles.termsSection}>
        {/* 제목과 구분선 */}
        <View style={styles.termsDividerRow}>
          <View style={styles.divider} />
          <Text style={styles.termsTitle}>약관 동의</Text>
          <View style={styles.divider} />
        </View>

        {/* 약관 항목 리스트 */}
        <View style={styles.termsContentWrapperImprovedAligned}>
          {terms.map((item, idx) => (
            <View key={idx} style={styles.termsRowLeftAligned}>
              <TouchableOpacity onPress={() => toggleAgreement(item.text)} style={styles.circleBox}>
                {checked[item.text] && <View style={styles.innerCircle} />}
              </TouchableOpacity>
              <Text style={styles.termsText}>{item.text}</Text>
              {item.link && (
                <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
                  <Text style={styles.linkText}>내용보기</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* 완료 버튼 */}
      <TouchableOpacity style={[styles.completeButton, { marginTop: 40 }]} onPress={handleSubmit}>
        <Text style={styles.completeButtonText}>완료</Text>
      </TouchableOpacity>

      {/* 마지막 하단 여백 */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#FAFAFA',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 150,
  },
  spacerLarge: {
    height: 20,
  },
  spacerLargeMore: {
    height: 35,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  backArrow: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 23,
    color: '#424347',
    fontFamily: 'OpenSans-Bold',
    marginLeft: 8,
  },
  formSection: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: '#3D3D3D',
    fontFamily: 'OpenSans-Regular',
    marginTop: 14,
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  input230: {
    width: 240,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#262626',
    fontFamily: 'OpenSans-Regular',
  },
  inputFull: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#262626',
    marginBottom: 6,
    fontFamily: 'OpenSans-Regular',
  },
  buttonGray: {
    width: 107,
    height: 48,
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextGray: {
    fontSize: 14,
    color: '#909999',
    fontFamily: 'OpenSans-Regular',
  },
  termsSection: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },
  termsDividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9DE',
  },
  termsTitle: {
    fontSize: 14,
    color: '#A3A3A3',
    marginHorizontal: 8,
    fontFamily: 'OpenSans-Regular',
  },
  termsContentWrapperImprovedAligned: {
    width: '90%',
    alignSelf: 'center',
  },
  termsRowLeftAligned: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  circleBox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#A3A3A3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5DB374',
  },
  termsText: {
    fontSize: 13,
    color: '#A3A3A3',
    fontFamily: 'OpenSans-Regular',
    marginRight: 6,
  },
  linkText: {
    fontSize: 14,
    color: '#6686DC',
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans-Regular',
  },
  completeButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#5DB374',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Bold',
  },
});

export default SignUpScreen;
