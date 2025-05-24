import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const services = [
  { id: '1', name: 'Electricians' },
  { id: '2', name: 'Plumbers' },
  { id: '3', name: 'Carpenters' },
  { id: '4', name: 'Hospitals' },
  { id: '5', name: 'Hotels' }
];

export default function ServicesScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ServiceDetails', { service: item })}>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}