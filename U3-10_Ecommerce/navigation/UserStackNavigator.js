// navigation/UserStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User1 from '../screens/User1';
import User3 from '../screens/User3';

const Stack = createNativeStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="User1" component={User1} />
      <Stack.Screen name="Detalles" component={User3} />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;

