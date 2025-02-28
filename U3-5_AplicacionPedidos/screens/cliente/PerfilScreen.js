import { Image,View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const PerfilScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Image source={require("../../assets/perfil.png")} style={styles.imagen} />
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.userName}>Jonathan Barrera</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", color: "#ff9800", marginBottom: 10 },
  imagen: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  userName: { fontSize: 18, color: "#333", marginBottom: 5 },
  button: { backgroundColor: "#ff5722", padding: 12, borderRadius: 8, marginTop: 20 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PerfilScreen;
