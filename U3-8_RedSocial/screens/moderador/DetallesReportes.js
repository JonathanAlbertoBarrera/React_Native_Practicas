import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import api from "../../config/api";
import { useTheme } from "../../context/ThemeContext";

const DetallesReportes = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { reporte } = route.params;

  const handleEliminarPublicacion = async () => {
    try {
      await api.delete(`/users/${reporte.id}`);
      Alert.alert("Éxito", "La publicación ha sido eliminada.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar la publicación.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ color: theme.textColor, fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Detalles del Reporte</Text>
      
      <Text style={{ color: theme.textColor, fontSize: 18 }}>Usuario: {reporte.first_name} {reporte.last_name}</Text>
      <Text style={{ color: theme.textColor, fontSize: 16, marginTop: 10 }}>ID de Reporte: {reporte.id}</Text>

      <TouchableOpacity
        onPress={handleEliminarPublicacion}
        style={{ backgroundColor: "red", padding: 12, borderRadius: 8, marginTop: 20 }}
      >
        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>Eliminar Publicación</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetallesReportes;
