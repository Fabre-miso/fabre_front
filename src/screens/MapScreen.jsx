import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements';

const MapScreen = () => {
  const navigation = useNavigation();
  const [selectedHospitals, setSelectedHospitals] = useState([]);
  const webViewRef = useRef();

  const kakaoMapHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }
        #map {
          width: 100%;
          height: 300px;
          border-radius: 10px;
        }
      </style>
      <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=09f91643653ce007b134688fcfa9982d&libraries=services"></script>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var ps = new kakao.maps.services.Places();
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        searchHospitals();

        function searchHospitals() {
          ps.keywordSearch('동물병원', placesSearchCB, {location: map.getCenter()});
        }

        function placesSearchCB(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            var bounds = new kakao.maps.LatLngBounds();
            var hospitalData = [];
            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              hospitalData.push({
                place_name: data[i].place_name,
                address_name: data[i].address_name,
                phone: data[i].phone,
                distance: data[i].distance
              });
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            map.setBounds(bounds);
            window.ReactNativeWebView.postMessage(JSON.stringify(hospitalData));
          }
        }

        function displayMarker(place) {
          var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
          });

          kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
          });
        }
      </script>
    </body>
  </html>
  `;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '근처 병원',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '600',
        paddingRight: 55,
      },
      headerShadowVisible: false,
    });
  }, [navigation]);

  const onMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      setSelectedHospitals(data);
    } catch (e) {
      console.error('메시지 파싱 오류', e);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Text style={styles.searchLabel}>동물병원 검색</Text>
          <View style={styles.searchInputBox}>
            <Image source={require('../assets/image/map_search.png')} style={styles.searchIcon} resizeMode="contain" />
            <TextInput
              placeholder="동물병원 검색"
              style={styles.searchInput}
              placeholderTextColor="#aaa"
            />
          </View>

          <TouchableOpacity style={styles.now}>
            <Image source={require('../assets/image/nowXY.png')} style={styles.searchIcon} resizeMode="contain" />
            <Text>현재위치</Text>
          </TouchableOpacity>
        </View>

        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ html: kakaoMapHtml }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={onMessage}
        />

        {/* 병원 목록 출력 */}
        <View style={styles.hospitalListContainer}>
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
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  searchInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    height: 40,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#000',
  },
  map: {
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  hospitalListContainer: {
    flex: 1,
  },
  hospitalItem: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  hospitalName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hospitalInfo: {
    fontSize: 13,
    marginTop: 2,
  },
  searchIcon: {
    width: 14,
    height: 14,
    marginLeft: 10,
  },
  now: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
    paddingRight: 10,
    marginVertical: 10,
  }
});

export default MapScreen;