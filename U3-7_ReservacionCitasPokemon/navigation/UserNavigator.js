import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Servicios from '../src/screens/cliente/Servicios';
import MiPerfilCitas from '../src/screens/cliente/MiPerfilCitas';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const UserNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Servicios') {
          iconName = 'list';
        } else if (route.name === 'Mi Perfil') {
          iconName = 'user';
        }
        return <Feather name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#03264C',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#FFE600' },
    })}
  >
    <Tab.Screen name="Servicios" component={Servicios} />
    <Tab.Screen name="Mi Perfil" component={MiPerfilCitas} />
  </Tab.Navigator>
);

export default UserNavigator;