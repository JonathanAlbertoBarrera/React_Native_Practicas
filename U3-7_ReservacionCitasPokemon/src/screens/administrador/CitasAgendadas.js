import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import api from '../../config/api';

const CitasAgendadas = () => {
  const [pokemon, setPokemon] = useState([]); // Lista de Pokémon
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Obtener la lista de Pokémon
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await api.get('/pokemon?limit=20');
        setPokemon(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setError('Error al cargar la lista de Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FF5733" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Agendadas</Text>

      {/* Lista de Pokémon */}
      <FlatList
        data={pokemon}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name.toUpperCase()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03264C',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03264C',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default CitasAgendadas;