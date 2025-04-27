import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeMain from './src/screens/HomeMain';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginMain from './src/screens/LoginMain';
import MonitoringMainScreen from './src/screens/MonitoringMainScreen';
import Fairscreen from './src/screens/Fairscreen';
import MapScreen from './src/screens/MapScreen';
import PetRegister from './src/screens/PetRegister';
import PetEdit from './src/screens/PetEdit';
import SettingScreen from './src/screens/SettingScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import CommunityStack from './src/navigation/CommunityStack';
import WeightDetailScreen from './src/screens/WeightDetailScreen';
import FeedDetailScreen from './src/screens/FeedDetailScreen';
import PoopDetailScreen from './src/screens/PoopDetailScreen';
import HospitalDetailScreen from './src/screens/HospitalDetailScreen';
import MorfCalcMainScreen from './src/screens/MorfCalcMainScreen/MorfCalcMainScreen';
import MorfCalcResultScreen from './src/screens/MorfCalcMainScreen/MorfCalcResultScreen';

const BottomTab = createBottomTabNavigator();
const FairStack = createStackNavigator();

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

const MapStack = createStackNavigator();

const MapStackScreen = () => (
  <MapStack.Navigator>
    <MapStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: true }}
    />
  </MapStack.Navigator>
);

const tabScreens = [
  {
    name: '커뮤니티',
    component: CommunityStack,
    icon: require('./src/assets/image/community.png'),
  },
  {
    name: '모니터링',
    component: MonitoringMainScreen,
    icon: require('./src/assets/image/monitoring.png'),
  },
  {
    name: '홈',
    component: HomeMain,
  },
  {
    name: '모프계산기',
    component: MorfCalcMainScreen,
    icon: require('./src/assets/image/mofcalc.png'),
  },
  {
    name: '병원지도',
    component: MapStackScreen,
    icon: require('./src/assets/image/MapScreen.png'),
  },
];

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginMain">
        <Stack.Screen name="LoginMain" component={LoginMain} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="PetRegister" component={PetRegister} />
        <Stack.Screen name="PetEdit" component={PetEdit} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="WeightScreen" component={WeightDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FeedScreen" component={FeedDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PoopScreen" component={PoopDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HospitalDetailScreen" component={HospitalDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MorfCalcMainScreen" component={MorfCalcMainScreen} />
        <Stack.Screen name="MorfCalcResultScreen" component={MorfCalcResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
