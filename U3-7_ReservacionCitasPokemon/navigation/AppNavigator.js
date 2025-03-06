import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import Bienvenida from '../src/screens/Bienvenida';
import Login from '../src/screens/Login';
import AdminNavigator from './AdminNavigator';
import UserNavigator from './UserNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          user.role === 'admin' ? (
            <Stack.Screen name="AdminStack" component={AdminNavigator} />
          ) : (
            <Stack.Screen name="UserStack" component={UserNavigator} />
          )
        ) : (
          <>
            <Stack.Screen name="Bienvenida" component={Bienvenida} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;