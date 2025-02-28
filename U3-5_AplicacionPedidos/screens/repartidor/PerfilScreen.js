import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const PerfilScreen = () => {
  const { logout } = useContext(AuthContext);
  const [nombre, setNombre] = useState("Juan Aguilar");
  const [editando, setEditando] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image source={require("../../assets/perfil.png")} style={styles.imagen} />

      {editando ? (
        <TextInput value={nombre} onChangeText={setNombre} style={styles.input} />
      ) : (
        <Text style={styles.userName}>{nombre}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => setEditando(!editando)}>
        <Text style={styles.buttonText}>{editando ? "Guardar Cambios" : "Modificar Datos"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logout]} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", color: "#ff9800", marginBottom: 10 },
  imagen: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  input: { fontSize: 18, color: "#333", borderBottomWidth: 1, borderBottomColor: "#FF6F00", marginBottom: 5, width: "80%", textAlign: "center" },
  userName: { fontSize: 18, color: "#333", marginBottom: 5 },
  button: { backgroundColor: "#ff5722", padding: 12, borderRadius: 8, marginTop: 10, width: "80%", alignItems: "center" },
  logout: { backgroundColor: "#d32f2f" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PerfilScreen;

