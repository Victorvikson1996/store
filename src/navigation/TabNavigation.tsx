import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Account, Cart } from '../screens';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { black } from '../constants/colors';
import { HomeStackNavigation } from './HomeStackNavigation';
import { HomeStack } from './HomeStack';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Hometab' component={HomeStack} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='Account' component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
