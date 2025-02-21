import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginMain = () => {
  return (
    <View style={styles.container}>
      {/* 메인 로고 */}
      <Image source={require('../assets/image/Fabrelogo.png')} style={styles.FabreLogo} resizeMode="contain"/>

      {/* 아이디 & 비밀번호 입력창 */}
      <TextInput placeholder="아이디" style={styles.input} />
      <TextInput placeholder="비밀번호" secureTextEntry style={styles.input} />

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>

      {/* 구분선 OR */}
      <View style={styles.container2}>
        <Image source={require('../assets/image/line.png')} style={styles.line} resizeMode="contain"/>
        <Text style={styles.orText}>Or </Text>
        <Image source={require('../assets/image/line.png')} style={styles.line} resizeMode="contain"/>
      </View>

      {/* 추가 로그인 옵션 (구글, 전화번호) */}
      <View style={styles.socialLoginContainer}>
        
        <TouchableOpacity style={styles.socialButton}>
            <View style={styles.container2}>
                <Image source={require('../assets/image/GoogleLogo.png')} style={styles.socialIcon} />
                <Text style={styles.socialText}>Continue with Google</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
            <View style={styles.container2}>
                <Image source={require('../assets/image/MobileLogo.png')} style={styles.socialIcon} />
                <Text style={styles.socialText}>Continue with mobile number</Text>
            </View>
        </TouchableOpacity>
      </View>

      {/* 회원가입 페이지로 이동 */}
      <TouchableOpacity>
        <Text style={styles.signupText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 40,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  FabreLogo: {
    marginTop: 100,
    marginBottom: 50,
    width: '65%',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    color: '#A3A3A3'
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#5DB374',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'OpenSans-Regular.ttf'
  },
  orText: {
    fontSize: 14,
    color: '#a3a3a3',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  line: {
    width: 150
  },
  socialLoginContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: 14,
    color: '#262626'
  },
  signupText: {
    marginTop: 200,
    fontSize: 14,
    color: '#3d3d3dx',
    fontWeight: 400,
    textDecorationLine: 'underline'
  },
});

export default LoginMain;
