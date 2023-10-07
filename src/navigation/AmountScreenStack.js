import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AmountScreen from '../view/AmountScreen';

const Stack = createNativeStackNavigator();

export default function AmountScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AmountScreen" component={AmountScreen} options={{title: "Proceder al pago con OXXO Pay"}} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})