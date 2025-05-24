import React from 'react';
import { View, Text } from 'react-native';

export default function ServiceDetailsScreen({ route }) {
  const { service } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{service.name}</Text>
      <Text style={{ marginTop: 10 }}>More details about {service.name} will go here.</Text>
    </View>
  );
}