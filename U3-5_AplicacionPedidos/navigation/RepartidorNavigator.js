import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import PedidosAsignadosScreen from "../screens/repartidor/PedidosAsignadosScreen";
import PerfilScreen from "../screens/repartidor/PerfilScreen";

const Tab = createBottomTabNavigator();

const RepartidorNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "#FF7043" },
      tabBarActiveTintColor: "#fff",
      tabBarInactiveTintColor: "#FFAB91",
    }}
  >
    <Tab.Screen 
      name="Pedidos Asignados" 
      component={PedidosAsignadosScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="package" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Perfil" 
      component={PerfilScreen} 
      options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default RepartidorNavigator;

