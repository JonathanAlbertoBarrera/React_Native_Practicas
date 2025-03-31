import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

import LoginScreen from '../screens/LoginScreen';
import BottomNavigator from './BottomNavigator'; // ← Ahora es el que decide qué mostrar

export default function AppNavigator() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={{
      dark: theme.background === '#121212',
      colors: {
        background: theme.background,
        card: theme.headerBack,
        text: theme.textColor,
        border: theme.card,
        notification: theme.selections,
        primary: theme.selections,
      }
    }}>
      {!user ? <LoginScreen /> : <BottomNavigator />}
    </NavigationContainer>
  );
}

