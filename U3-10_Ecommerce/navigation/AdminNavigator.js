import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Admin1 from "../screens/Admin1";
import Admin2 from "../screens/Admin2";
import { Feather } from "@expo/vector-icons";
import CustomDrawerContent from "./CustomDrawerContent";
import { useTheme } from "../context/ThemeContext";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminMain" component={Admin1} />
      <Stack.Screen name="OrderDetail" component={Admin2} />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
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
        component={AdminStack}
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminNavigator;