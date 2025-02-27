import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PedidosAsignadosScreen from "../screens/repartidor/PedidosAsignadosScreen";
import PerfilScreen from "../screens/repartidor/PerfilScreen";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RepartidorNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Pedidos Asignados" 
      component={PedidosAsignadosScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="package" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Perfil" 
      component={PerfilScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default RepartidorNavigator;
