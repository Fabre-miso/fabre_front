import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeMain from './src/screens/HomeMain';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginMain from './src/screens/LoginMain';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import PetRegister from './src/screens/PetRegister';
import PetEdit from './src/screens/PetEdit';
import SettingScreen from './src/screens/SettingScreen';

const BottomTab = createBottomTabNavigator();

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
              style={{
                width: 60,
                height: 60,
                marginTop: 10,
              }}
              resizeMode="contain"
            />
          );
        }
        return (
          <Image
            source={tab.icon}
            style={{
              width: 24,
              height: 24,
              tintColor: color,
              marginTop: 35,
            }}
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

const tabScreens = [
  {
    name: '메뉴1',
    component: Screen1,
    icon: require('./src/assets/image/screen1.png'),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
