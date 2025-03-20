import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const HomeMain = ({ navigation }) => {
  const [selectedPet, setSelectedPet] = useState({
    name: '뿌기',
    image: require('../assets/image/user_pet1.png'),
  });

  const petList = [
    { name: '뿌기', image: require('../assets/image/user_pet1.png') },
    { name: '따기', image: require('../assets/image/user_pet2.png') },
    { name: '꾸기', image: require('../assets/image/user_pet3.png') },
    // { name: '등록하기', image: require('../assets/image/plus.png'), isRegister: true },
  ];

  return (
    <View style={styles.container}>

      {/* 상단 바 */}
      <View style={styles.header}>
        <Image source={require('../assets/image/Fabrelogo.png')} style={styles.FabreLogo} resizeMode="contain" />

        <View style={styles.iconContainer}>
          <Image source={require('../assets/image/search.png')} style={styles.icon} resizeMode="contain" />
          <Image source={require('../assets/image/bell.png')} style={styles.icon} resizeMode="contain" />
        </View>
      </View>

      {/* 펫 썸네일 리스트 */}
      <View style={styles.petContainer}>
        {petList.map((pet, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pet}
            onPress={() => setSelectedPet(pet)}
          >
            <Image source={pet.image} style={[styles.menuIcon, styles.circleImage]} resizeMode="cover" />
            <Text style={styles.petName}>{pet.name}</Text>
          </TouchableOpacity>
        ))}

        {/* 등록하기 버튼 별도 렌더링 */}
        <TouchableOpacity
          style={styles.pet}
          onPress={() => navigation.navigate('PetRegister')}
        >
          <Image source={require('../assets/image/plus.png')} style={[styles.menuIcon, styles.circleImage]} resizeMode="cover" />
          <Text style={styles.petName}>등록하기</Text>
        </TouchableOpacity>
      </View>

      {/* 선택된 펫 메인 이미지 영역 */}
      <View style={styles.mainPetContainer}>
      <Image source={selectedPet.image} style={styles.mainPetImage} resizeMode="cover" />
      <Text style={styles.mainPetName}>{selectedPet.name}</Text>

      <TouchableOpacity style={styles.detailButton}>
        <Text style={styles.detailButtonText}>자세히보기</Text>
      </TouchableOpacity>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image source={require('../assets/image/chatIcon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>챗봇</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PetEdit')}>
            <Image source={require('../assets/image/editIcon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>수정하기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SettingScreen')}>
            <Image source={require('../assets/image/settingIcon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>환경설정</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 10,
    position: 'relative',
  },
  FabreLogo: {
    width: 120,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 110,
    marginTop: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 20
  },
  pet: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    overflow: 'hidden',
  },
  petName: {
    fontSize: 12,
    color: '#ABABAB',
    marginTop: 5,
  },
  mainPetContainer: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
  },
  mainPetImage: {
    width: 240,
    height: 240,
    borderRadius: 240,
    marginVertical: 30,
  },
  mainPetName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#749B74',
    marginVertical: 10,
  },
  detailButton: {
    backgroundColor: '#5DB374',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 120,
    marginVertical: 35,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 55,
    height: 55,
  },
  menuText: {
    marginTop: 10,
    color: '#ABABAB',
    fontSize: 12,
  },
  
});

export default HomeMain;
