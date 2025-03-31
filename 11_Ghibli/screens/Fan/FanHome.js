import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { GHIBLI_API_URL } from '@env';

export default function FanHome() {
  const { theme } = useTheme();
  const { logout, user } = useAuth();
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${GHIBLI_API_URL}/films`);
      setMovies(res.data);
    } catch (error) {
      console.log("Error al cargar películas:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('Detalles', { movie: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.textColor }]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>Año: {item.release_date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.welcome, { color: theme.textColor }]}>
        Bienvenido, {user?.username}
      </Text>

      <TouchableOpacity
        style={[styles.favButton, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate('Favoritos')}
      >
        <Text style={{ color: theme.buttonText }}>⭐ Ver Favoritos</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      <TouchableOpacity
        onPress={logout}
        style={[styles.logoutButton, { backgroundColor: theme.card }]}
      >
        <Text style={{ color: theme.textColor }}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  welcome: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  favButton: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: { width: 100, height: 140 },
  info: { flex: 1, padding: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginTop: 5 },
  logoutButton: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
});

