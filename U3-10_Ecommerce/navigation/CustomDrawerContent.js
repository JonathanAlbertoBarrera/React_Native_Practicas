import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import { useTheme } from "../context/ThemeContext";

const CustomDrawerContent = (props) => {
  const { theme, toggleTheme } = useTheme();
  const styles = StyleSheet.create({
    header: {
      height: 200,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.headerBack,
      paddingTop: 10,
      marginBottom: 10,
      width: "auto",
      flexDirection: "column",
      gap: 5,
    },
    image: {
      width: 50,
      height: 80,
      borderRadius: 40,
    },
    title: {
      color: "white",
      fontSize: 25,
      marginTop: 10,
    },
    leave: {
      alignSelf: "flex-end",
      marginRight: 10,
    },
    imgTitle: {
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: theme.drawerBack }}>
      <View style={styles.header}>
        <View style={styles.leave}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Ionicons name="close" size={30} color={theme.textColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgTitle}>
          <Image source={require("../assets/logo.png")} style={styles.image} />
          <Text style={{color: theme.background, fontSize: 30}}>Menú</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
};

export default CustomDrawerContent;
