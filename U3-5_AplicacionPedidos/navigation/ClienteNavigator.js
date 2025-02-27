import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "../screens/cliente/InicioScreen";
import MisPedidosScreen from "../screens/cliente/MisPedidosScreen";
import PerfilScreen from "../screens/cliente/PerfilScreen";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const ClienteNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Inicio" 
      component={InicioScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Mis Pedidos" 
      component={MisPedidosScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Perfil" 
      component={PerfilScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default ClienteNavigator;
