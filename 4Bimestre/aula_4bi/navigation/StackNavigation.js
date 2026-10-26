import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../data/dados";

import LoginScreen from "../screens/Login";
import PerfilScreen from "../screens/Perfil";
import HomeScreen from "../screens/Home";
import PersonagensScreen from "../screens/Personagens";
import TemporadasScreen from "../screens/Temporadas";
import MysticFallsScreen from "../screens/MysticFalls";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Personagens"
          component={PersonagensScreen}
        />

        <Stack.Screen
          name="Temporadas"
          component={TemporadasScreen}
        />

        <Stack.Screen
          name="MysticFalls"
          component={MysticFallsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}