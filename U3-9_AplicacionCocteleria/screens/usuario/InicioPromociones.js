import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const InicioPromociones = () => {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        setPromociones(response.data.drinks);
      } catch (error) {
        console.error('Error fetching promociones:', error);
      }
    };

    fetchPromociones();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promociones de Hoy</Text>
      <FlatList
        data={promociones}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Text style={styles.text}>{item.strDrink}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    padding: 10,
    fontSize: 16,
  },
});

export default InicioPromociones;