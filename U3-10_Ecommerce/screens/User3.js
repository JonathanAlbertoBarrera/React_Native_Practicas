import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import axios from 'axios';

const User3 = ({ route }) => {
  const { theme } = useTheme();
  const { product } = route.params;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
      const random = res.data.sort(() => 0.5 - Math.random()).slice(0, 5);
      setComments(random);
    } catch (error) {
      console.error("Error al cargar comentarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={[styles.title, { color: theme.textColor }]}>{product.title}</Text>
      <Text style={[styles.price, { color: theme.selections }]}>${product.price}</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>{product.description}</Text>

      <Text style={[styles.commentHeader, { color: theme.textColor }]}>Comentarios:</Text>
      {loading ? (
        <ActivityIndicator size="large" color={theme.selections} />
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={[styles.comment, { color: theme.textColor }]}>• {item.body}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 250, resizeMode: 'contain', marginBottom: 15, backgroundColor: 'white' },
  title: { fontSize: 20, fontWeight: 'bold' },
  price: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  description: { fontSize: 16, marginBottom: 20 },
  commentHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  comment: { fontSize: 14, marginBottom: 5 }
});

export default User3;
