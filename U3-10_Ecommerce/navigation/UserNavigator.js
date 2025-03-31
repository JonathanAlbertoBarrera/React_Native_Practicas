import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import CustomDrawerContent from "./CustomDrawerContent";

import User2 from "../screens/User2";
import UserStackNavigator from "./UserStackNavigator";

const Drawer = createDrawerNavigator();

const UserNavigator = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={toggleTheme} style={{ marginRight: "5%" }}>
            <Feather
              name={theme.background === "#121212" ? "moon" : "sun"}
              size={24}
              color={theme.textColor}
            />
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: theme.headerBack },
        drawerStyle: { backgroundColor: theme.drawerBack },
        drawerActiveTintColor: theme.selections,
        drawerInactiveTintColor: theme.textColor,
        headerTintColor: theme.textColor,
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={UserStackNavigator}
        options={{
          drawerLabel: "Productos",
          drawerIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={User2}
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default UserNavigator;

