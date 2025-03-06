import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import api from '../../config/api';
import { AuthContext } from '../../../context/AuthContext'; 

const DetallePaciente = () => {
  const { logout } = useContext(AuthContext); 
  const [pokemonList, setPokemonList] = useState([]); // Lista de Pokémon
  const [selectedPokemonName, setSelectedPokemonName] = useState(null); // Nombre del Pokémon seleccionado
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(null); // Detalles del Pokémon seleccionado
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Obtener la lista de Pokémon
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await api.get('/pokemon?limit=20');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        setError('Error al cargar la lista de Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  // Obtener detalles del Pokémon seleccionado
  useEffect(() => {
    if (!selectedPokemonName) return;

    const fetchPokemonDetails = async () => {
      try {
        const response = await api.get(`/pokemon/${selectedPokemonName}`);
        setSelectedPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        setError('Error al cargar los detalles del Pokémon.');
      }
    };

    fetchPokemonDetails();
  }, [selectedPokemonName]);

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
      <Text style={styles.title}>Detalle del Pokémon</Text>

      {/* Selector de Pokémon */}
      <Picker
        selectedValue={selectedPokemonName}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedPokemonName(itemValue)}
      >
        <Picker.Item label="Selecciona un Pokémon" value={null} />
        {pokemonList.map((pokemon, index) => (
          <Picker.Item key={index} label={pokemon.name.toUpperCase()} value={pokemon.name} />
        ))}
      </Picker>

      {/* Detalles del Pokémon seleccionado */}
      {selectedPokemonDetails && (
        <View style={styles.detailsContainer}>
          <Image
            source={{ uri: selectedPokemonDetails.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.name}>{selectedPokemonDetails.name.toUpperCase()}</Text>
          <Text style={styles.detail}>Altura: {selectedPokemonDetails.height / 10} m</Text>
          <Text style={styles.detail}>Peso: {selectedPokemonDetails.weight / 10} kg</Text>
          <Text style={styles.detail}>Usuario Dueño: Jona ABC</Text>
          <Text style={styles.detail}>Enfermedad: Cáncer de pokemón</Text>
        </View>
      )}

      {/* Botón de Cerrar Sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03264C',
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03264C',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    color: '#03264C',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetallePaciente;