import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars'; 
import { AuthContext } from '../../../context/AuthContext'; 

const MiPerfilCitas = () => {
  const { logout } = useContext(AuthContext); 

  // Datos del usuario
  const usuario = {
    nombre: 'Jona ABC',
    email: 'jona@example.com',
  };

  // Datos de la cita
  const cita = {
    fecha: '2023-10-25',
    servicio: 'Cáncer de pokemón',
    descripcion: 'Consulta para recuperar la salud de Pikachu.',
  };

  // Fechas marcadas en el calendario
  const markedDates = {
    [cita.fecha]: { marked: true, dotColor: '#FF5733' },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      {/* Datos del usuario */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{usuario.nombre}</Text>
        <Text style={styles.userEmail}>{usuario.email}</Text>
      </View>

      {/* Detalles de la cita */}
      <View style={styles.citaContainer}>
        <Text style={styles.citaTitle}>Próxima Cita</Text>
        <Text style={styles.citaText}>Fecha: {cita.fecha}</Text>
        <Text style={styles.citaText}>Servicio: {cita.servicio}</Text>
        <Text style={styles.citaText}>Descripción: {cita.descripcion}</Text>
      </View>

      {/* Mini Calendario */}
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        theme={{
          calendarBackground: '#FFF',
          todayTextColor: '#03264C',
          dayTextColor: '#03264C',
          textDisabledColor: '#999',
          arrowColor: '#03264C',
          monthTextColor: '#03264C',
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
        }}
      />

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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03264C',
    marginBottom: 1,
  },
  userInfo: {
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 10,
    marginBottom: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#03264C',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  citaContainer: {
    backgroundColor: '#FFF',
    padding: 3,
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  citaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#03264C',
    marginBottom: 5,
  },
  citaText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  calendar: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 3,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MiPerfilCitas;