import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function First() {

  const navigator = useNavigation();
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Button title="IR A LO PERRÓN" onPress={() => {navigator.replace("AmountScreenS")}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: "100%",
    marginTop: StatusBar.currentHeight || 0,
  }
})