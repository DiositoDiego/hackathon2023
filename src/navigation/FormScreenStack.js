import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormScreen from '../view/Form';
const Stack = createNativeStackNavigator();

export default function FormScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FormScreen" component={FormScreen} options={{title: "Proceder al llenado del formulario"}} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})