import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { theme } = useTheme();
  const { user, login } = useAuth();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.role === 'FAN') {
      navigation.reset({ index: 0, routes: [{ name: 'Fan' }] });
    } else if (user?.role === 'REVISOR') {
      navigation.reset({ index: 0, routes: [{ name: 'Revisor' }] });
    }
  }, [user]);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Completa todos los campos.");
      return;
    }

    try {
      setLoading(true);

      // Requisito técnico: simula login con reqres
      await axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      });

      // Aquí sí usas tu lógica real del contexto
      login(username, password);

      if (username.toLowerCase() !== 'fan' && username.toLowerCase() !== 'revisor') {
        Alert.alert("Error", "Credenciales inválidas.");
      } else {
        Alert.alert("Bienvenido", username);
      }

    } catch (error) {
      Alert.alert("Error", "La API de login falló");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Login Studio Ghibli</Text>

      <TextInput
        placeholder="Usuario (fan / revisor)"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { backgroundColor: theme.card, color: theme.textColor }]}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={[styles.input, { backgroundColor: theme.card, color: theme.textColor }]}
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: {
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
});

export default LoginScreen;

