import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenido al Escape Room</Text>
        <Button title="Comenzar Misión" onPress={() => navigation.navigate('Profile')} />
      </View>
    );
  }
  