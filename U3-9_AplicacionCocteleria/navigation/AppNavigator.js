import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import InicioPromociones from '../screens/usuario/InicioPromociones';
import MiPerfil from '../screens/usuario/MiPerfil';
import ListaCocteles from '../screens/coctelero/ListaCocteles';
import DetallesCoctel from '../screens/coctelero/DetallesCoctel';
import DetallesCoctel1 from '../screens/usuario/DetallesCoctel';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator>
          {user.role === 'usuario' ? (
            <>
              <Drawer.Screen name="Promociones" component={InicioPromociones} />
              <Drawer.Screen name="Mi Perfil" component={MiPerfil} />
              <Drawer.Screen name="Detalles del Cóctel" component={DetallesCoctel1} />
            </>
          ) : (
            <>
              <Drawer.Screen name="Lista de Cócteles" component={ListaCocteles} />
              <Drawer.Screen name="Detalles del Cóctel" component={DetallesCoctel} />
            </>
          )}
        </Drawer.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;