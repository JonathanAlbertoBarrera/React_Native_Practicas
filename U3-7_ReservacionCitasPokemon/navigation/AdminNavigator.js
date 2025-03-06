import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitasAgendadas from '../src/screens/administrador/CitasAgendadas';
import DetallePaciente from '../src/screens/administrador/DetallePaciente';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AdminNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Citas') {
          iconName = 'list';
        } else if (route.name === 'Detalle') {
          iconName = 'info';
        }
        return <Feather name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#03264C',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#FFE600' },
    })}
  >
    <Tab.Screen
      name="Citas"
      component={CitasAgendadas}
      options={{ title: 'Citas Agendadas' }}
    />
    <Tab.Screen
      name="Detalle"
      component={DetallePaciente}
      options={{ title: 'Detalle del Pokémon' }}
    />
  </Tab.Navigator>
);

export default AdminNavigator;