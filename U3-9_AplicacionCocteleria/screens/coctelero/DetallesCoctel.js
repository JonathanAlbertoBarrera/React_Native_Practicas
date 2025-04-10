import React, { useEffect, useState,useContext } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator,TouchableOpacity } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const DetallesCoctel = () => {
    const { logout } = useContext(AuthContext);
  const [coctel, setCoctel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const idDrink = '11007'; 

  useEffect(() => {
    const fetchCoctel = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        if (response.data.drinks && response.data.drinks.length > 0) {
          setCoctel(response.data.drinks[0]); // Guarda los detalles del cóctel
        } else {
          setError('Cóctel no encontrado');
        }
      } catch (error) {
        console.error('Error fetching coctel:', error);
        setError('Error al cargar los detalles del cóctel');
      } finally {
        setLoading(false);
      }
    };

    fetchCoctel();
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

  if (!coctel) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No se encontró el cóctel.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: coctel.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{coctel.strDrink}</Text>
      <Text style={styles.text}>{coctel.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FF3B30',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default DetallesCoctel;