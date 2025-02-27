import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import ClienteNavigator from "./ClienteNavigator";
import RepartidorNavigator from "./RepartidorNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          user.role === "cliente" ? (
            <Stack.Screen name="ClienteStack" component={ClienteNavigator} />
          ) : (
            <Stack.Screen name="RepartidorStack" component={RepartidorNavigator} />
          )
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
}
