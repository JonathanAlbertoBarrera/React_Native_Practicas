import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const pedidos = [
  { id: "1", estado: "En camino", animacion: require("../../assets/en_camino.gif") },
  { id: "2", estado: "Entregado", animacion: require("../../assets/entregado.gif") },
];

const MisPedidosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📦 Mis Pedidos</Text>
      {pedidos.map((pedido) => (
        <View key={pedido.id} style={styles.pedido}>
          <Image source={pedido.animacion} style={styles.animacion} />
          <Text style={styles.estado}>{pedido.estado}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFF3E0" },
  titulo: { fontSize: 22, fontWeight: "bold", color: "#FF6F00", marginBottom: 20 },
  pedido: { alignItems: "center", marginBottom: 20 },
  animacion: { width: 150, height: 150, resizeMode: "contain" },
  estado: { fontSize: 18, fontWeight: "bold", color: "#333" },
});

export default MisPedidosScreen;


