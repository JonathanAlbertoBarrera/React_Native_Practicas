import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useContext } from 'react';
import { useTheme } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { Feather } from "@expo/vector-icons";

const User2 = () => {
  const { theme } = useTheme();
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const confirmPurchase = () => {
    Alert.alert(
      "Confirmar compra",
      `Total: $${calculateTotal().toFixed(2)}\n¿Desea confirmar la compra?`,
      [
        { text: "Cancelar" },
        { 
          text: "Confirmar", 
          onPress: () => {
            Alert.alert("Compra exitosa", "Su pedido ha sido procesado");
            clearCart();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Carrito</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>No hay productos en el carrito</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(index)}>
                  <Feather name="trash-2" size={20} color="#ff4444" />
                </TouchableOpacity>
              </View>
            )}
          />
          <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>
          <TouchableOpacity style={styles.button} onPress={confirmPurchase}>
            <Text style={styles.buttonText}>Confirmar Compra</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: { flex: 1, fontSize: 16 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  removeButton: { marginLeft: 10, padding: 5 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'right' },
  button: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 8, marginTop: 20, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 50 }
});

export default User2;
