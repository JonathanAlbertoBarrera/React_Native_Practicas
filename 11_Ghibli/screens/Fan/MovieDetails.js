import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';
import { useFavorites } from '../../context/FavoriteContext';
import { GHIBLI_API_URL } from '@env';

export default function MovieDetails({ route }) {
  const { theme } = useTheme();
  const { movie } = route.params;
  const [characters, setCharacters] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`${GHIBLI_API_URL}/people`);
      const related = res.data.filter(p => p.films.includes(movie.url));
      setCharacters(related);
    } catch (e) {
      console.log("Error cargando personajes", e);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={[styles.title, { color: theme.textColor }]}>{movie.title}</Text>
      <Text style={[styles.subtitle, { color: theme.textColor }]}>
        Dirigida por: {movie.director} | Productor: {movie.producer}
      </Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        {movie.description}
      </Text>

      <TouchableOpacity
        onPress={() =>
          isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)
        }
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
      >
        <Text style={{ color: theme.buttonText }}>
          {isFavorite(movie.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.subtitle, { color: theme.textColor, marginTop: 15 }]}>
        Personajes:
      </Text>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={[styles.character, { color: theme.textColor }]}>• {item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  image: { width: '100%', height: 250, resizeMode: 'contain', backgroundColor: 'white' },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 16, fontWeight: '600' },
  description: { fontSize: 14, marginVertical: 10 },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  character: { fontSize: 14, marginVertical: 2 },
});
