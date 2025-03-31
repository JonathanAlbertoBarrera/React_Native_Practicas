import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import api from '../config/api';
import { Feather } from "@expo/vector-icons";

const Admin2 = ({ navigation, route }) => {
  const { theme } = useTheme();
  const { order } = route.params || {};
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Asignado");

  useEffect(() => {
    if (order?.id) {
      fetchOrderDetails();
    }
  }, [order]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/carts/${order.id}`);
      setOrderDetails(response.data.products || []);
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
    Alert.alert(
      "Estado actualizado",
      `El pedido #${order.id} ahora está "${newStatus}"`,
      [{ text: "OK" }]
    );
  };

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 15,
      backgroundColor: theme.background 
    },
    title: { 
      fontSize: 24, 
      fontWeight: "bold", 
      marginBottom: 15,
      color: theme.textColor 
    },
    statusText: {
      fontSize: 18,
      color: theme.selections,
      marginBottom: 15,
      fontWeight: "bold"
    },
    productCard: {
      padding: 10,
      marginBottom: 10,
      backgroundColor: theme.card,
      borderRadius: 8
    },
    productText: {
      fontSize: 16,
      color: theme.textColor,
      marginBottom: 5
    },
    productTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: theme.textColor
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20
    },
    statusButton: {
      padding: 12,
      borderRadius: 8,
      backgroundColor: theme.buttonBackground,
      minWidth: 150,
      alignItems: "center"
    },
    buttonText: {
      color: theme.buttonText,
      fontWeight: "bold"
    }
  });

  if (!order?.id) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pedido no encontrado</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: theme.selections }}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Pedido #{order.id}</Text>
      <Text style={styles.statusText}>Estado actual: {status}</Text>
      
      <Text style={{ color: theme.textColor, marginBottom: 10 }}>Productos:</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} />
      ) : (
        <FlatList
          data={orderDetails}
          keyExtractor={(item) => item.productId.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Text style={styles.productTitle}>Producto ID: {item.productId}</Text>
              <Text style={styles.productText}>Cantidad: {item.quantity}</Text>
            </View>
          )}
        />
      )}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.statusButton}
          onPress={() => updateStatus("En camino")}
        >
          <Text style={styles.buttonText}>Marcar como En Camino</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.statusButton}
          onPress={() => updateStatus("Entregado")}
        >
          <Text style={styles.buttonText}>Marcar como Entregado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Admin2;