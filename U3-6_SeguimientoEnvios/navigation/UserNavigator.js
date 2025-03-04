import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RastrearPedido from "../screens/user/RastrearPedido";
import HistorialMisEnvios from "../screens/user/HistorialMisEnvios"
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const UserNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: true }}>
    <Tab.Screen 
      name="Rastrear Paquete" 
      component={RastrearPedido} 
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Mi Historial" 
      component={HistorialMisEnvios} 
      options={{ tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default UserNavigator;