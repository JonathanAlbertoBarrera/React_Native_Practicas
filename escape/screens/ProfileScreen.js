import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({ name: 'jona' }); 


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola, {user.name}!</Text>
        <Image
        source={{ uri: 'https://em-content.zobj.net/source/microsoft-teams/363/bug_1f41b.png' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        />

      <Button title="Siguiente" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
}