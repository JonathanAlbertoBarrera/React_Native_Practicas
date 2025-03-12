import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import api from "../config/api";
import { useTheme } from "../context/ThemeContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    try {
      const response = await api.post("/login", {
        email: email.trim().toLowerCase(),
        password: password,
      });

      if (response.data.token) {
        const role = email.includes("moderator") ? "moderador" : "user";
        login(email, password, role);
      } else {
        Alert.alert("Error", "Credenciales incorrectas.");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo iniciar sesión. Verifica tu email y contraseña.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, color: theme.textColor }}>Iniciar Sesión</Text>

      <TextInput
        style={{ width: "100%", padding: 10, borderWidth: 1, borderColor: theme.textColor, borderRadius: 8, marginBottom: 10, color: theme.textColor }}
        placeholder="Correo electrónico"
        placeholderTextColor="gray"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={{ width: "100%", padding: 10, borderWidth: 1, borderColor: theme.textColor, borderRadius: 8, marginBottom: 20, color: theme.textColor }}
        placeholder="Contraseña"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: theme.buttonBackground, padding: 12, borderRadius: 8, width: "100%", alignItems: "center" }}
      >
        <Text style={{ color: theme.buttonText, fontSize: 16 }}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
