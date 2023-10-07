import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonHack from "../components/ButtonHack";
import { Button } from "react-native-elements";

export default function AmountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text>Holiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxShadow}></View>
        <View style={styles.buttonContainer}>
          <ButtonHack text="Proceder al pago" style={styles.buttonStyle} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    width: "100%",
    backgroundColor: "#46D29D",
    height: 100,
  },
  buttonStyle: {
    borderRadius: 20,
    backgroundColor: "#46D29D",
    width: "100%",
    height: 50,
  },
  buttonContainer: {
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
  },
  boxShadow: {
    width: "200%",
    height: 80,
    backgroundColor: "transparent",
    elevation: 79,
    marginBottom: -20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
