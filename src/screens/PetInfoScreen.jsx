import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function PetInfoScreen({ route }) {
  // HomeMain에서 navigation.navigate('PetInfoScreen', { pet: selectedPet }) 로 넘어온 데이터
  const pet = route?.params?.pet ?? { name: '이름 없음', image: null };

  return (
    <ScrollView style={styles.container}>
      {/* ✅ 상단바(Fabre 로고 + 아이콘)는 제거 */}

      {/* pet 이미지 + 이름 */}
      <View style={styles.headerContainer}>
        <View style={styles.imageWrapper}>
          {pet.image ? (
            <Image source={pet.image} style={styles.image} />
          ) : (
            <Image source={require('../assets/image/defaultProfile.png')} style={styles.image} />
          )}
        </View>
        <Text style={styles.name}>{pet.name}</Text>
      </View>

      <View style={styles.infoList}>
        <InfoItem label="성별" value="수컷" />
        <InfoItem label="생년월일" value="2023.01.15" />
        <InfoItem label="종" value="설카타 육지거북" />
        <InfoItem label="무게" value="350g" />
        <InfoItem label="알러지" value="없음" />

        <View style={styles.detailContainer}>
          <View style={styles.detailLabelWrapper}>
            <Text style={styles.detailLabel}>기타</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailText}>
              아침엔 상추를 특히 좋아하며{'\n'}
              물은 하루에 한 번 꼭 급여해야 한다.{'\n'}
              상추, 당근, 로메인을 좋아하며{'\n'}
              오이를 싫어한다.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function InfoItem({ label, value }) {
  return (
    <View style={styles.infoItemContainer}>
      <View style={styles.infoLabelBox}>
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <View style={styles.infoValueBox}>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    padding: 20,
  },

  // ✅ header 관련 스타일은 전부 삭제해도 됨
  headerContainer: { alignItems: 'center', paddingVertical: 50 },
  imageWrapper: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom: 16,
  },
  image: { width: '100%', height: '100%' },
  name: { fontSize: 20, fontWeight: '600', color: '#749B74' },

  infoList: { gap: 16 },
  infoItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    overflow: 'hidden',
  },
  infoLabelBox: {
    width: '33%',
    backgroundColor: '#C9D7C9',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 38,
    borderBottomRightRadius: 38,
  },
  infoLabel: { textAlign: 'center', color: '#374151', fontWeight: '500' },
  infoValueBox: {
    width: '67%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoValue: { color: '#111827', textAlign: 'center' },

  detailContainer: { position: 'relative', marginTop: 16 },
  detailLabelWrapper: {
    position: 'absolute',
    top: -12,
    left: 16,
    backgroundColor: '#C9D7C9',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 999,
    zIndex: 1,
  },
  detailLabel: { color: '#374151', fontWeight: '600', fontSize: 15 },
  detailBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#1F2937',
    lineHeight: 22,
    textAlign: 'center',
  },
});
