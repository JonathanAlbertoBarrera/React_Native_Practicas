import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import api from "../../config/api";
import { useTheme } from "../../context/ThemeContext";

const SolicitudesAmistad = () => {
  const { theme } = useTheme();
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const response = await api.get("/users?page=2");
        setSolicitudes(response.data.data);
      } catch (error) {
        console.error("Error al obtener solicitudes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolicitudes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 10 }}>
      <Text style={{ color: theme.textColor, fontSize: 24, textAlign: "center", marginBottom: 10 }}>Solicitudes de Amistad</Text>

      {loading ? <ActivityIndicator size="large" color={theme.buttonBackground} /> : (
        <FlatList
          data={solicitudes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={{ color: theme.textColor, fontSize: 18, padding: 10 }}>{item.first_name} {item.last_name}</Text>
          )}
        />
      )}
    </View>
  );
};

export default SolicitudesAmistad;
