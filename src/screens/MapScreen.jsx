import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements';

const MapScreen = () => {
  const navigation = useNavigation();
  const [selectedHospitals, setSelectedHospitals] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const webViewRef = useRef();

  const kakaoMapHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
      #map { width: 100%; height: 100%; }
    </style>
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=09f91643653ce007b134688fcfa9982d&libraries=services"></script>
  </head>
  <body>
    <div id="map" style="width:100%;height:100%;"></div>
    <script>
  window.onload = function() {

  console.log("스트립트 시작");
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
  };

  var map = new kakao.maps.Map(container, options);
  console.log("map 객체 생성 완료:", map);

  try {
    var center = map.getCenter();
    console.log("map.getCenter() 성공:", center);
  } catch (e) {
    console.error("map.getCenter() 실패:", e);
  }

  var ps;
  try {
    ps = new kakao.maps.services.Places();
    console.log("Places 서비스 객체 생성 성공:", ps);
  } catch (e) {
    console.error("Places 서비스 생성 실패:", e);
  }

  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  console.log("infowindow 생성 완료");

  try {
    ps.keywordSearch('동물병원', placesSearchCB, {
      location: map.getCenter(),
      radius: 5000
    });
    console.log("keywordSearch 호출 완료");
  } catch (e) {
    console.error("keywordSearch 호출 실패:", e);
  }

  function placesSearchCB(data, status) {
    console.log("placesSearchCB 호출됨:", status);
    if (status === kakao.maps.services.Status.OK) {
      console.log("검색 결과:", data);
    } else {
      console.warn("검색 실패 또는 결과 없음:", status);
    }
  }

};
</script>

  </body>
</html>
`;


  useLayoutEffect(() => {
    navigation.setOptions({
      title: '근처 병원',
      headerTitleAlign: 'center',
      headerTitleStyle: { fontSize: 20, fontWeight: '600', paddingRight: 55 },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const onMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log('🏥 병원 리스트 수신:', data);  // ✅ 추가
      setSelectedHospitals(data);
    } catch (e) {
      console.error('❗ 메시지 파싱 오류', e);
    }
  };
  

  const handleSearch = () => {
    if (webViewRef.current && searchKeyword.trim()) {
      console.log('🔍 검색어:', searchKeyword);  // ✅ 추가
      webViewRef.current.postMessage(searchKeyword);
    }
  };
  
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        {/* 검색창 */}
        <View style={styles.searchBox}>
          <Text style={styles.searchLabel}>동물병원 검색</Text>
          <View style={styles.searchInputBox}>
            <Image source={require('../assets/image/map_search.png')} style={styles.searchIcon} resizeMode="contain" />
            <TextInput
              placeholder="동물병원 검색"
              style={styles.searchInput}
              placeholderTextColor="#aaa"
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.now} onPress={handleSearch}>
            <Image source={require('../assets/image/nowXY.png')} style={styles.searchIcon} resizeMode="contain" />
            <Text>현재위치</Text>
          </TouchableOpacity>
        </View>

        {/* 카카오맵 */}
        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ html: kakaoMapHtml }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={onMessage}
        />

        {/* 병원 리스트 */}
        <View style={styles.hospitalListContainer}>
          {selectedHospitals.length > 0 ? (
            <FlatList
              data={selectedHospitals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.hospitalItem}>
                  <Text style={styles.hospitalName}>{item.place_name}</Text>
                  <Text style={styles.hospitalInfo}>{item.address_name}</Text>
                  <Text style={styles.hospitalInfo}>📞 {item.phone || '번호 없음'}</Text>
                </View>
              )}
            />
          ) : (
            <View style={styles.noResultContainer}>
              <Text style={styles.noResultText}>검색 결과가 없습니다.</Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  searchBox: { backgroundColor: '#fff', borderRadius: 10, padding: 16, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  searchLabel: { fontWeight: 'bold', fontSize: 14, marginBottom: 8 },
  searchInputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, height: 40 },
  searchInput: { flex: 1, paddingHorizontal: 8, fontSize: 14, color: '#000' },
  map: { height: 400, borderRadius: 10, overflow: 'hidden', marginBottom: 16 },
  hospitalListContainer: { flex: 1 },
  hospitalItem: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#eee' },
  hospitalName: { fontSize: 15, fontWeight: 'bold' },
  hospitalInfo: { fontSize: 13, marginTop: 2 },
  searchIcon: { width: 14, height: 14, marginLeft: 10 },
  now: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 4, paddingRight: 10, marginVertical: 10 },
  noResultContainer: { alignItems: 'center', marginTop: 20 },
  noResultText: { fontSize: 14, color: '#999' },
});

export default MapScreen;
