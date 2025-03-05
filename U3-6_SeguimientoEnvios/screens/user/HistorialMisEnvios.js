import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const HistorialMisEnvios = () => {
  const { logout } = useContext(AuthContext); // Obtén la función de logout
  const historial = [
    { id: 1, numeroGuia: '123456', estado: 'Entregado', fecha: '20/10/2023' },
    { id: 2, numeroGuia: '789012', estado: 'En tránsito', fecha: '25/10/2023' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Historial de Envíos</Text>
      {historial.map((envio) => (
        <View key={envio.id} style={styles.tarjeta}>
          <Text>Número de guía: {envio.numeroGuia}</Text>
          <Text>Estado: {envio.estado}</Text>
          <Text>Fecha: {envio.fecha}</Text>
        </View>
      ))}

      {/* Botón de Cerrar Sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03264C',
    marginVertical: 16,
  },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Rojo para el botón de cerrar sesión
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistorialMisEnvios;