import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import InicioScreen from "../screens/cliente/InicioScreen";
import PedidosScreen from "../screens/cliente/MisPedidosScreen";
import PerfilScreen from "../screens/cliente/PerfilScreen";

const Tab = createBottomTabNavigator();

const ClienteNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "#FFA726" },
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#FFD180",
    }}
  >
    <Tab.Screen 
      name="Inicio" 
      component={InicioScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Mis Pedidos" 
      component={PedidosScreen} 
      options={{ tabBarIcon: ({ color }) => <MaterialIcons name="receipt-long" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Perfil" 
      component={PerfilScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default ClienteNavigator;

