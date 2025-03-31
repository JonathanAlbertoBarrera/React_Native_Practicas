import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';
import { GHIBLI_API_URL } from '@env';

export default function ReviewerDetails({ route }) {
  const { theme } = useTheme();
  const { movie } = route.params;

  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState(false);

  const fetchExtras = async () => {
    try {
      const peopleRes = await axios.get(`${GHIBLI_API_URL}/people`);
      const locationRes = await axios.get(`${GHIBLI_API_URL}/locations`);

      const relatedCharacters = peopleRes.data.filter(p =>
        p.films.includes(movie.url)
      );

      const relatedLocations = locationRes.data.filter(l =>
        l.films.includes(movie.url)
      );

      setCharacters(relatedCharacters);
      setLocations(relatedLocations);
    } catch (error) {
      console.log("Error cargando datos extra:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExtras();
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={[styles.title, { color: theme.textColor }]}>{movie.title}</Text>
      <Text style={[styles.sub, { color: theme.textColor }]}>Director: {movie.director}</Text>
      <Text style={[styles.sub, { color: theme.textColor }]}>Productor: {movie.producer}</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>{movie.description}</Text>

      <TouchableOpacity
        style={[styles.featureButton, { backgroundColor: theme.buttonBackground }]}
        onPress={() => setFeatured(!featured)}
      >
        <Text style={{ color: theme.buttonText }}>
          {featured ? '✅ Destacada' : '📌 Marcar como Destacada'}
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} />
      ) : (
        <>
          <Text style={[styles.section, { color: theme.textColor }]}>Personajes:</Text>
          {characters.map((c) => (
            <Text key={c.id} style={[styles.item, { color: theme.textColor }]}>• {c.name}</Text>
          ))}

          <Text style={[styles.section, { color: theme.textColor }]}>Ubicaciones:</Text>
          {locations.map((l) => (
            <Text key={l.id} style={[styles.item, { color: theme.textColor }]}>• {l.name}</Text>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  image: { width: '100%', height: 250, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  sub: { fontSize: 16, marginVertical: 3 },
  description: { fontSize: 14, marginVertical: 10 },
  section: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  item: { fontSize: 14, marginLeft: 10, marginTop: 5 },
  featureButton: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  }
});
