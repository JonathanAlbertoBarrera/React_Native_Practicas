import { createDrawerNavigator } from '@react-navigation/drawer';
import ListaCocteles from '../screens/coctelero/ListaCocteles';
import DetallesCoctel from '../screens/coctelero/DetallesCoctel';

const Drawer = createDrawerNavigator();

const CocteleroNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Lista de Cócteles" component={ListaCocteles} />
    <Drawer.Screen name="Detalles del Cóctel" component={DetallesCoctel} />
  </Drawer.Navigator>
);

export default CocteleroNavigation;
