import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FanStack from './FanStack';
import ReviewerStack from './ReviewerStack';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Películas') iconName = 'film-outline';
          else if (route.name === 'Revisión') iconName = 'book-outline';
          else if (route.name === 'Ajustes') iconName = 'settings-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5C6BC0',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      {user?.role === 'FAN' && (
        <Tab.Screen name="Películas" component={FanStack} />
      )}
      {user?.role === 'REVISOR' && (
        <Tab.Screen name="Revisión" component={ReviewerStack} />
      )}
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

