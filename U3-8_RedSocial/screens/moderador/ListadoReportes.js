import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import api from "../../config/api";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const ListadoReportes = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportes = async () => {
      try {
        const response = await api.get("/users?page=2");
        setReportes(response.data.data);
      } catch (error) {
        console.error("Error al obtener reportes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 10 }}>
      <Text style={{ color: theme.textColor, fontSize: 24, textAlign: "center", marginBottom: 10 }}>Reportes</Text>

      {loading ? (
        <ActivityIndicator size="large" color={theme.buttonBackground} />
      ) : (
        <FlatList
          data={reportes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: theme.textColor,
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate("Detalles", { reporte: item })}
            >
              <Text style={{ color: theme.background, fontSize: 18 }}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={{ color: theme.background, fontSize: 14 }}>Reporte ID: {item.id}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default ListadoReportes;
