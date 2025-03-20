import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const navigation = useNavigation();

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>⬅</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>회원가입</Text>
      </View>

      {/* Input Fields */}
      <Text style={styles.label}>아이디</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="아이디를 입력해주세요" placeholderTextColor="#9E9E9E" />
        <TouchableOpacity style={styles.disabledButton}>
          <Text style={styles.disabledButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>비밀번호</Text>
      <TextInput style={styles.input} placeholder="비밀번호는 8자 이상, 특수기호 포함해주세요(@, #, !)" placeholderTextColor="#9E9E9E" secureTextEntry />

      <Text style={styles.label}>휴대폰 번호</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} keyboardType="phone-pad" placeholder="01012345678" placeholderTextColor="#9E9E9E" />
        <TouchableOpacity style={styles.disabledButton}>
          <Text style={styles.disabledButtonText}>인증받기</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>인증번호</Text>
      <TextInput style={styles.input} placeholder="인증번호 4자리" keyboardType="numeric" placeholderTextColor="#9E9E9E" />

      {/* 약관 동의 */}
      <Text style={styles.label}>약관 동의</Text>
      {[
        { text: "(필수) 서비스 이용약관 동의", link: "내려보기" },
        { text: "(필수) 개인정보 수집 및 이용 동의", link: "내려보기" },
        { text: "(필수) 만 14세 이상" },
        { text: "(선택) 마케팅 수신 동의" },
        { text: "약관에 모두 동의" },
      ].map((item, index) => (
        <View key={index} style={styles.checkBoxRow}>
          <Text style={styles.checkBoxIcon}>📜</Text>
          <CheckBox
            title={
              <Text>
                {item.text} {item.link && <Text style={styles.linkText}>{item.link}</Text>}
              </Text>
            }
            checked={checkedItems[item.text] || false}
            onPress={() => toggleCheck(item.text)}
            containerStyle={styles.checkBox}
            textStyle={styles.checkBoxText}
          />
        </View>
      ))}

      {/* 완료 버튼 */}
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>완료</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    marginLeft: 8,
  },
  label: {
    color: "#333",
    marginBottom: 8,
    fontFamily: "OpenSans-Regular",
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#262626",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  disabledButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  disabledButtonText: {
    color: "#9E9E9E",
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  checkBox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  checkBoxText: {
    fontFamily: "OpenSans-Regular",
    color: "#333",
  },
  linkText: {
    color: "#1976D2",
    textDecorationLine: "underline",
  },
  completeButton: {
    marginTop: 24,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
});

export default SignUpScreen;
