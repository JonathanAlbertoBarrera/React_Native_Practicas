import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RastrearPedido = () => {
  const [guia, setGuia] = useState('');
  const [paquete, setPaquete] = useState(null);

  const buscarPaquete = () => {
    // Simulación de búsqueda de paquete
    setPaquete({
      numeroGuia: '123456',
      estado: 'En tránsito',
      fechaEntrega: '25/10/2023',
      ubicacion: { latitude: 19.4326, longitude: -99.1332 }, // Ubicación de ejemplo (CDMX)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rastrear Paquete</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu número de guía"
        value={guia}
        onChangeText={setGuia}
      />
      <Button title="Buscar" onPress={buscarPaquete} color="#03264C" />

      {paquete && (
        <View style={styles.detalles}>
          <Text>Número de guía: {paquete.numeroGuia}</Text>
          <Text>Estado: {paquete.estado}</Text>
          <Text>Fecha estimada: {paquete.fechaEntrega}</Text>

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
      )}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03264C',
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#03264C',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  detalles: {
    marginTop: 16,
  },
  mapa: {
    width: '100%',
    height: 200,
    marginVertical: 16,
  },
});

export default RastrearPedido;