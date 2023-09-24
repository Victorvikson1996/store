import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, Details } from '../screens';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  );
};
