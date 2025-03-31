import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  Alert
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import api from "../config/api";

const User1 = ({ navigation }) => {
  const { theme } = useTheme();
  const { logout } = useContext(AuthContext);
  const { cart, addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error", "No se pudieron cargar los productos");
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

  const handleProductPress = (product) => {
    navigation.navigate('Detalles', { product });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme.card,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.textColor,
    },
    cartButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cartCount: {
      backgroundColor: theme.selections,
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5
    },
    cartCountText: {
      color: theme.background,
      fontWeight: 'bold',
      fontSize: 12
    },
    productCard: {
      flexDirection: "row",
      margin: 10,
      backgroundColor: theme.card,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3,
    },
    productImage: {
      width: 120,
      height: 120,
      resizeMode: "contain",
      backgroundColor: 'white'
    },
    productInfo: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between'
    },
    productTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.textColor,
    },
    productPrice: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.selections,
      marginVertical: 5
    },
    productDescription: {
      fontSize: 14,
      color: theme.textColor,
      opacity: 0.7,
      marginBottom: 10
    },
    addButton: {
      backgroundColor: theme.buttonBackground,
      padding: 8,
      borderRadius: 5,
      alignItems: 'center'
    },
    buttonText: {
      color: theme.buttonText,
      fontWeight: "bold"
    },
    logoutButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: "red",
      padding: 12,
      borderRadius: 30,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Productos</Text>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Carrito')}
        >
          <Feather name="shopping-cart" size={24} color={theme.textColor} />
          {cart.length > 0 && (
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProductPress(item)}>
              <View style={styles.productCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
                  <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                  <Text style={styles.productDescription} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => {
                      addToCart(item);
                      Alert.alert("Producto añadido", `${item.title} se añadió al carrito`);
                    }}
                  >
                    <Text style={styles.buttonText}>Agregar al carrito</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Feather name="log-out" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default User1;
