import { createDrawerNavigator } from '@react-navigation/drawer';
import InicioPromociones from '../screens/usuario/InicioPromociones';
import MiPerfil from '../screens/usuario/MiPerfil';
import DetallesCoctel from '../screens/usuario/DetallesCoctel';

const Drawer = createDrawerNavigator();

const UserNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Inicio" component={InicioPromociones} />
    <Drawer.Screen name="Mi Perfil" component={MiPerfil} />
    <Drawer.Screen name="Detalles del Cóctel" component={DetallesCoctel} />
  </Drawer.Navigator>
);

export default UserNavigation;
