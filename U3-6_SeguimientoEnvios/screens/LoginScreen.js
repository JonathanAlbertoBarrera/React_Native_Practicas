import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo o imagen de la aplicación */}
      <Image
        source={require("../assets/logopaquete.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo de usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#999"
        autoCapitalize="none"
        onChangeText={(text) => setUsername(text.trim().toLowerCase())}
      />

      {/* Campo de contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.button} onPress={() => login(username, password)}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE600", // Fondo amarillo
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#03264C", // Texto azul
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#03264C", // Borde azul
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    fontSize: 16,
    color: "#03264C", // Texto azul
  },
  button: {
    width: "100%",
    backgroundColor: "#03264C", // Fondo azul
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF", // Texto blanco
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;