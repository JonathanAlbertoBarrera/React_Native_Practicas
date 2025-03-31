import React from 'react';
import {
  View, Text, FlatList, Image,
  StyleSheet, TouchableOpacity
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useFavorites } from '../../context/FavoriteContext';

export default function FavoriteList({ navigation }) {
  const { theme } = useTheme();
  const { favorites, removeFavorite } = useFavorites();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('Detalles', { movie: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.textColor }]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>
          Año: {item.release_date}
        </Text>

        <TouchableOpacity
          onPress={() => removeFavorite(item.id)}
          style={[styles.removeButton, { backgroundColor: theme.buttonBackground }]}
        >
          <Text style={{ color: theme.buttonText }}>Quitar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.titlePage, { color: theme.textColor }]}>Mis Películas Favoritas</Text>

      {favorites.length === 0 ? (
        <Text style={[styles.emptyText, { color: theme.textColor }]}>
          No tienes películas favoritas aún.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  titlePage: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 50 },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: { width: 100, height: 140 },
  info: { flex: 1, padding: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginVertical: 5 },
  removeButton: {
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'flex-start'
  },
});
