import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AmountScreen from "../view/AmountScreen";
import First from "../view/First";
import FormScreen from "../view/Form";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="FirstS"
          component={First}
          options={{ title: "First", headerShown: false }}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmountScreenS"
          component={AmountScreen}
          options={{
            title: "Proceder al pago con OXXO Pay",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FormScreenS"
          component={FormScreen}
          options={{
            title: "Proceder al llenado del formulario",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
