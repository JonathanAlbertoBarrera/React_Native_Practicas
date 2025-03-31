import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';

const lightColors = {
  background: '#F3F8F2',
  textColor: '#2D2D2D',
  card: '#FFFFFF',
  selections: '#5C6BC0',
  headerBack: '#A5C9CA', 
  drawerBack: '#E3F2FD',
  buttonBackground: '#5C6BC0',
  buttonText: '#FFFFFF',
};

const darkColors = {
  background: '#1E1E1E',
  textColor: '#F3F8F2',
  card: '#2D2D2D',
  selections: '#FFB74D',
  headerBack: '#303030',
  drawerBack: '#1A1A1A',
  buttonBackground: '#FFB74D',
  buttonText: '#000000',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme(); // Detecta si el sistema es oscuro
  const [darkMode, setDarkMode] = useState(colorScheme === 'dark');

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = darkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

