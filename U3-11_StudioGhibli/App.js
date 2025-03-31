import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import MainNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
