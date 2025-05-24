import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Welcome to Gayaza Marketplace</Text>
      <Button title="View Services" onPress={() => navigation.navigate('Services')} />
    </View>
  );
}