import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PaquetesTransito from "../screens/admin/PaquetesTransito";
import ActualizarPaquetes from "../screens/admin/ActualizarPaquetes"
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AdminNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: true }}>
    <Tab.Screen 
      name="Paquetes en Tránsito" 
      component={PaquetesTransito} 
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Actualizar Paquetes" 
      component={ActualizarPaquetes} 
      options={{ tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default AdminNavigator;