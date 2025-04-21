import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityTabs from '../screens/CommunityTabs'; // ✅ 변경
import CommunityDetail from '../screens/CommunityDetail';
import WriteScreen from '../screens/WriteScreen';

const Stack = createStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CommunityMain" component={CommunityTabs} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
      <Stack.Screen name="WriteScreen" component={WriteScreen} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
