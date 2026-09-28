import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Diario from '../screens/Diario';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a0005',
          },
          headerTintColor: '#d4af37',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#0b0b0b',
          },
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Diário de um Vampira',
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Diário de um Vampira',
          }}
        />

        <Stack.Screen
          name="Diario"
          component={Diario}
          options={{
            title: 'Meu Diário',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}