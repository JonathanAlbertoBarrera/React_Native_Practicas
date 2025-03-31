import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizScreen({ navigation }) {
  const [answer, setAnswer] = useState('');

  const checkAnswer = () => {
    if (answer !== 'React') {
      alert('¡Incorrecto!');
    } else {
      navigation.navigate('Victory');
    }
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>¿Cuál framework estamos usando?</Text>
      <Button title="React" onPress={() => setAnswer('React')} />
      <Button title="Vue" onPress={() => setAnswer('Vue')} />
      <Button title="Angular" onPress={() => setAnswer('Angular')} />
      <Button title="Enviar respuesta" onPress={checkAnswer} />
    </View>
  );
}