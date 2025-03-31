import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { GHIBLI_API_URL } from '@env';

export default function ReviewerHome() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('DetallesRevisor', { movie: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.textColor }]}>{item.title}</Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>Director: {item.director}</Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>Año: {item.release_date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.textColor }]}>Películas (Revisor)</Text>

      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
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
});
