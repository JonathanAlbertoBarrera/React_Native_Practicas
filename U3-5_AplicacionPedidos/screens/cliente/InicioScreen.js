import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const restaurantes = [
  { id: "1", nombre: "Fredys Tortas y Asociados", imagen: require("../../assets/logoTortas.png") },
  { id: "2", nombre: "El Rincón del Pozole", imagen: require("../../assets/pozole.png") },
  { id: "3", nombre: "Pizzería Don Vito", imagen: require("../../assets/pizza.png") },
];

const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🍽️ Restaurantes</Text>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagen} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFE0B2", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15, textAlign: "center" },
  card: { backgroundColor: "#FFF3E0", padding: 15, borderRadius: 10, marginBottom: 10, alignItems: "center" },
  imagen: { width: 120, height: 120, borderRadius: 10, marginBottom: 10 },
  nombre: { fontSize: 18, fontWeight: "bold" },
});

export default InicioScreen;

