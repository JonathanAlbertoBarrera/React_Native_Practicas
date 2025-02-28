import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

const pedidos = [
  { id: "1", direccion: "Av. Reforma 123", lat: 19.4326, lon: -99.1332 },
  { id: "2", direccion: "Insurgentes Sur 456", lat: 19.4000, lon: -99.1500 },
];

const PedidosAsignadosScreen = () => {
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛵 Pedidos Asignados</Text>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.pedido} onPress={() => setPedidoSeleccionado(item)}>
            <Text style={styles.textoPedido}>📍 {item.direccion}</Text>
          </TouchableOpacity>
        )}
      />

      {pedidoSeleccionado && Platform.OS !== "web" ? (
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: pedidoSeleccionado.lat,
            longitude: pedidoSeleccionado.lon,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={{ latitude: pedidoSeleccionado.lat, longitude: pedidoSeleccionado.lon }} title="Pedido" />
        </MapView>
      ) : (
        <Text style={styles.mensaje}>🌍 Selecciona un pedido para ver el mapa</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFE0B2" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  pedido: { padding: 15, backgroundColor: "#FF7043", marginBottom: 10, borderRadius: 10 },
  textoPedido: { fontSize: 16, color: "white", fontWeight: "bold" },
  mapa: { flex: 1, marginTop: 10 },
  mensaje: { fontSize: 16, fontStyle: "italic", textAlign: "center", marginTop: 20 },
});

export default PedidosAsignadosScreen;

