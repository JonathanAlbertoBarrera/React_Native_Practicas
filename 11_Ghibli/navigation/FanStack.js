import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas del fan
import FanHome from '../screens/Fan/FanHome';
import MovieDetails from '../screens/Fan/MovieDetails';
import FavoriteList from '../screens/Fan/FavoriteList';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function FanStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen
        name="Películas Ghibli"
        component={FanHome}
        options={{ headerTitle: "Películas Ghibli" }}
      />
      <Stack.Screen
        name="Detalles"
        component={MovieDetails}
        options={{ headerTitle: "Detalles de Película" }}
      />
      <Stack.Screen
        name="Favoritos"
        component={FavoriteList}
        options={{ headerTitle: "Mis Favoritos" }}
      />
      <Stack.Screen name="Ajustes" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

