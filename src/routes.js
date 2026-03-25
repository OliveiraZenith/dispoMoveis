import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Main from "./pages/main";
import Pokemon from "./pages/pokemon";
import Cadastro from "./pages/cadastro";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "#F5F5F5" },
          gestureEnabled: true,
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#EF5350",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Pokédex",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#EF5350",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            title: "Detalhes do Pokémon",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#EF5350",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro de Usuário",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#EF5350",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}