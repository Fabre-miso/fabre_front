import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeMain from './src/screens/HomeMain';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginMain from './src/screens/LoginMain';

import CommunityMain from './src/screens/CommunityMain';
import CommunityDetail from './src/screens/CommunityDetail';

import Fairscreen from './src/screens/Fairscreen';

import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import PetRegister from './src/screens/PetRegister';
import PetEdit from './src/screens/PetEdit';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const FairStack = createStackNavigator();

// 박람회 탭 안에서 사용하는 Stack Navigator
const FairStackScreen = () => {
  return (
    <FairStack.Navigator>
      <FairStack.Screen
        name="Fairscreen"
        component={Fairscreen}
        options={{ headerShown: true }}
      />
    </FairStack.Navigator>
  );
};

// 하단 탭 스크린 정의
const tabScreens = [
  // {
  //   name: '커뮤니티',
  //   component: CommunityMain,
  //   icon: require('./src/assets/image/screen1.png'),
  // },
  {
    name: '박람회',
    component: FairStackScreen,
    icon: require('./src/assets/image/Fairscreen.png'),
  },
  {
    name: '메뉴2',
    component: Screen2,
    icon: require('./src/assets/image/screen2.png'),
  },
  {
    name: '홈',
    component: HomeMain,
  },
  {
    name: '메뉴3',
    component: Screen3,
    icon: require('./src/assets/image/screen3.png'),
  },
  {
    name: '메뉴4',
    component: Screen4,
    icon: require('./src/assets/image/screen4.png'),
  },
];

// 하단 탭 내비게이션 정의
const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#fff',
        },
        tabBarIcon: ({ color, focused }) => {
          const tab = tabScreens.find(t => t.name === route.name);
          const isHome = route.name === '홈';

          if (!tab) return null;

          if (isHome) {
            const homeIcon = focused
              ? require('./src/assets/image/home_green.png')
              : require('./src/assets/image/home_gray.png');

            return (
              <Image
                source={homeIcon}
                style={{ width: 60, height: 60, marginTop: 10 }}
                resizeMode="contain"
              />
            );
          }

          return (
            <Image
              source={tab.icon}
              style={{ width: 24, height: 24, tintColor: color, marginTop: 35 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#68936F',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {tabScreens.map(screen => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

// 최상위 App 내비게이션
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginMain">
        <Stack.Screen
          name="LoginMain"
          component={LoginMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PetRegister" component={PetRegister} />
        <Stack.Screen name="PetEdit" component={PetEdit} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen
          name="CommunityDetail"
          component={CommunityDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
