import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../../context/AuthContext';

const ActualizarPaquetes = () => {
  const { logout } = useContext(AuthContext);
  const [numeroGuia, setNumeroGuia] = useState('');
  const [estado, setEstado] = useState('En tránsito'); // Estado inicial

  const actualizarPaquete = () => {
    // Lógica para actualizar el estado del paquete
    console.log(`Actualizando paquete ${numeroGuia} a estado: ${estado}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Estado de Paquete</Text>

      {/* Campo para el número de guía */}
      <TextInput
        style={styles.input}
        placeholder="Número de guía"
        value={numeroGuia}
        onChangeText={setNumeroGuia}
      />

      {/* Selector de estados */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Nuevo estado:</Text>
        <Picker
          selectedValue={estado}
          style={styles.picker}
          onValueChange={(itemValue) => setEstado(itemValue)}
        >
          <Picker.Item label="En tránsito" value="En tránsito" />
          <Picker.Item label="En reparto" value="En reparto" />
          <Picker.Item label="Entregado" value="Entregado" />
          <Picker.Item label="Retrasado" value="Retrasado" />
        </Picker>
      </View>

      {/* Botón de Actualizar */}
      <TouchableOpacity style={styles.button} onPress={actualizarPaquete}>
        <Text style={styles.buttonText}>Actualizar</Text>
      </TouchableOpacity>

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
    backgroundColor: '#FFF',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#03264C',
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  pickerLabel: {
    padding: 8,
    fontSize: 16,
    color: '#03264C',
  },
  picker: {
    width: '100%',
  },
  button: {
    backgroundColor: '#03264C',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
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

export default ActualizarPaquetes;