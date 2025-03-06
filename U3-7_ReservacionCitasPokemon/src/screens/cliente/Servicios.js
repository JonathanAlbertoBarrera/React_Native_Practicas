import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Servicios = () => {
  
  const servicios = [
    { id: 1, nombre: 'Cáncer de pokemón', icon: 'heart', descripcion: 'Recupera la salud de tu Pokémon.' },
    { id: 2, nombre: 'Entrenamiento', icon: 'activity', descripcion: 'Mejora las habilidades de tu Pokémon.' },
    { id: 3, nombre: 'Evolución', icon: 'star', descripcion: 'Ayuda a tu Pokémon a evolucionar.' },
    { id: 4, nombre: 'Dieta Especial', icon: 'coffee', descripcion: 'Dieta personalizada para tu Pokémon.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios Disponibles</Text>

      {/* Lista de servicios */}
      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Feather name={item.icon} size={40} color="#03264C" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.serviceName}>{item.nombre}</Text>
              <Text style={styles.serviceDescription}>{item.descripcion}</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03264C',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Servicios;