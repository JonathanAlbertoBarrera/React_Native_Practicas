import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListadoReportes from "../screens/moderador/ListadoReportes";
import DetallesReportes from "../screens/moderador/DetallesReportes";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const ModeradorNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.background },
        tabBarActiveTintColor: theme.buttonBackground,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen 
        name="Reportes" 
        component={ListadoReportes} 
        options={{ tabBarIcon: ({ color }) => <Feather name="alert-circle" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Detalles" 
        component={DetallesReportes} 
        options={{ tabBarIcon: ({ color }) => <Feather name="file-text" size={24} color={color} /> }} 
      />
    </Tab.Navigator>
  );
};

export default ModeradorNavigator;
