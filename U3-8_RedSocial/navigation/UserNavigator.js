import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioUsuario from "../screens/usuario/InicioUsuario";
import MiPerfil from "../screens/usuario/MiPerfil";
import SolicitudesAmistad from "../screens/usuario/SolicitudesAmistad";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const UserNavigator = () => {
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
        name="Inicio" 
        component={InicioUsuario} 
        options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Solicitudes" 
        component={SolicitudesAmistad} 
        options={{ tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={MiPerfil} 
        options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
      />
    </Tab.Navigator>
  );
};

export default UserNavigator;
