import { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const LoginScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: "george.bluth@reqres.in", // Reqres.in usa "email" en lugar de "username"
        password,
      });

      console.log("Login exitoso:", response.data);
      Alert.alert("Éxito", "Inicio de sesión correcto.");
      login(username, password); // Ejecutar función de login
    } catch (error) {
      console.log("Error en login:", error.response?.data || error.message);
      Alert.alert("Error", "Usuario o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: theme.textColor,
    },
    input: {
      width: "80%",
      height: 40,
      borderWidth: 1,
      marginVertical: 10,
      padding: 8,
      color: theme.textColor,
      borderRadius: 8,
      borderColor: theme.selections,
    },
    button: {
      backgroundColor: theme.buttonBackground,
      padding: 12,
      borderRadius: 8,
      marginTop: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.buttonText,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        autoCapitalize="none"
        placeholderTextColor={theme.textColor}
        selectionColor={theme.selections}
        onChangeText={(text) => setUsername(text.trim().toLowerCase())}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        autoCapitalize="none"
        placeholderTextColor={theme.textColor}
        secureTextEntry
        selectionColor={theme.selections}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
