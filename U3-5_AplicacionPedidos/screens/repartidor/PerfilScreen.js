import { View, Text, StyleSheet } from "react-native";

const PerfilScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>👤 Perfil Repartidor</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});

export default PerfilScreen;