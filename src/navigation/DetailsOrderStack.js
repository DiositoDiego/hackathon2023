import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsOrderScreen from "../view/DetailsOrdenScreen";

const Stack = createNativeStackNavigator();

export default function DetailsOrderScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DetailsOrderScreen"
        component={DetailsOrderScreen}
        options={{ title: "Proceder al pago con OXXO Pay" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
