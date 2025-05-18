import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductListing from '../screens/ProductListing';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProductListing">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductListing" component={ProductListing} />
    </Stack.Navigator>
  );
}