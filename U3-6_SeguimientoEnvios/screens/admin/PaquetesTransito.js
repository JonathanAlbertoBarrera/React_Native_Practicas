import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PaquetesTransito = () => {
  const [paquetes, setPaquetes] = useState([
    { id: 1, numeroGuia: '123456', estado: 'En tránsito', ubicacion: { latitude: 19.4326, longitude: -99.1332 } },
    { id: 2, numeroGuia: '789012', estado: 'En reparto', ubicacion: { latitude: 20.6667, longitude: -103.3333 } },
  ]);

  const actualizarEstado = (id) => {
    // Simulación de actualización de estado
    setPaquetes(paquetes.map(p => p.id === id ? { ...p, estado: 'Entregado' } : p));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Paquetes en Tránsito</Text>
      {paquetes.map((paquete) => (
        <View key={paquete.id} style={styles.tarjeta}>
          <Text>Número de guía: {paquete.numeroGuia}</Text>
          <Text>Estado: {paquete.estado}</Text>
          <Button title="Actualizar Estado" onPress={() => actualizarEstado(paquete.id)} color="#03264C" />

          <MapView
            style={styles.mapa}
            initialRegion={{
              latitude: paquete.ubicacion.latitude,
              longitude: paquete.ubicacion.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker coordinate={paquete.ubicacion} />
          </MapView>
        </View>
      ))}
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
  mapa: {
    width: '100%',
    height: 200,
    marginVertical: 16,
  },
});

export default PaquetesTransito;