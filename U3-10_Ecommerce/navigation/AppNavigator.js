import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import AdminNavigator from "./AdminNavigator";
import UserNavigator from "./UserNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        user.role === "admin" ? (
          <Stack.Screen name="AdminStack" component={AdminNavigator} />
        ) : (
          <Stack.Screen name="UserStack" component={UserNavigator} />
        )
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
