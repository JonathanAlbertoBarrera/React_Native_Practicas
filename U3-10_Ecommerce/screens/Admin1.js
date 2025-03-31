import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Alert
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import api from '../config/api';
import { Feather } from "@expo/vector-icons";

const Admin1 = ({ navigation }) => {
  const { theme } = useTheme();
  const { logout } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get('/carts');
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      Alert.alert("Error", "No se pudieron cargar los pedidos");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres salir?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Salir", 
          onPress: () => logout() 
        }
      ]
    );
  };

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 15,
      backgroundColor: theme.background 
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15
    },
    title: { 
      fontSize: 24, 
      fontWeight: "bold",
      color: theme.textColor 
    },
    orderCard: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: theme.card,
      borderRadius: 8,
      borderLeftWidth: 5,
      borderLeftColor: theme.selections
    },
    orderText: {
      fontSize: 16,
      color: theme.textColor,
      marginBottom: 5
    },
    orderId: {
      fontWeight: "bold",
      fontSize: 18,
      color: theme.textColor
    },
    viewButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: theme.buttonBackground,
      borderRadius: 5,
      alignItems: "center"
    },
    buttonText: {
      color: theme.buttonText,
      fontWeight: "bold"
    },
    logoutButton: {
      padding: 10,
      backgroundColor: theme.card,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.selections
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pedidos Asignados</Text>
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Feather name="log-out" size={20} color={theme.textColor} />
        </TouchableOpacity>
      </View>
      
      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.orderCard}
              onPress={() => navigation.navigate("OrderDetail", { order: item })}
            >
              <Text style={styles.orderId}>Pedido #: {item.id}</Text>
              <Text style={styles.orderText}>Usuario ID: {item.userId}</Text>
              <Text style={styles.orderText}>Fecha: {new Date(item.date).toLocaleDateString()}</Text>
              
              <View style={styles.viewButton}>
                <Text style={styles.buttonText}>Ver Detalles</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Admin1;