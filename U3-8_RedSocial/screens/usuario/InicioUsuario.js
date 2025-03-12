import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import api from "../../config/api";
import { useTheme } from "../../context/ThemeContext";

const InicioUsuario = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/users?page=1");
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 10 }}>
      <Text style={{ color: theme.textColor, fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Publicaciones</Text>

      {loading ? <ActivityIndicator size="large" color={theme.buttonBackground} /> : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: theme.textColor, marginBottom: 10, padding: 10, borderRadius: 10 }}>
              <Image source={{ uri: item.avatar }} style={{ width: "100%", height: 200, borderRadius: 10 }} />
              <Text style={{ color: theme.background, fontSize: 18, marginTop: 10 }}>{item.first_name} {item.last_name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default InicioUsuario;
