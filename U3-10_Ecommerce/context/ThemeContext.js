import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";

// Definimos nuestros posibles temas
const lightTheme = {
  background: "#FFFFFF",
  textColor: "#333333",
  buttonBackground: "#1D6A3C",
  buttonText: "#e9e9e9",
  headerBack: "#0071BC",
  card: "#DDDDDD",
  selections: "#FFB81C",
  drawerBack: "#ffffff",
};

const darkTheme = {
  background: "#121212",
  textColor: "#E0E0E0",
  buttonBackground: "#1D6A3C",
  buttonText: "#aaaaaa",
  headerBack: "#0071BC",
  card: "#444444",
  selections: "#FFB81C",
  drawerBack: "#333333",
};

// Creamos un contexto
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const listener = ({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    };
    const subscription = Appearance.addChangeListener(listener);

    return () => subscription.remove();
  }, []);

  // Función para cambiar el tema manualmente
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usamos el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
