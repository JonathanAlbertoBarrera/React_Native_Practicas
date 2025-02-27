import { View, Text, StyleSheet } from "react-native";

const MisPedidosScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>🏠 Pedidos del cliente</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});

export default MisPedidosScreen;