import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Bienvenida = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pikachu.png')} style={styles.image} />
      <Text style={styles.title}>¡Bienvenido a PokeCitas!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE600', // Amarillo
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03264C', // Azul oscuro
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#03264C',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Bienvenida;