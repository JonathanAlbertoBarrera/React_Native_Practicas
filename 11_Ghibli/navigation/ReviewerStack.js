import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewerHome from '../screens/Reviewer/ReviewerHome';
import ReviewerDetails from '../screens/Reviewer/ReviewerDetails';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function ReviewerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Películas Revisor" component={ReviewerHome} />
      <Stack.Screen name="DetallesRevisor" component={ReviewerDetails} />
      <Stack.Screen name="Ajustes" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
