import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function ButtonHack() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation();

  const monto = "1000";
  const handlePress = () => {
    setModalVisible(false);
    //navegar a la pantalla de formulario
  };

  const handleCancel = () => {
    //cerrar modal
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Pago cancelado",
      visibilityTime: 2000,
    });
    setModalVisible(false);
    navigator.replace("AmountScreenS");
  };

  const handleContinue = () => {
    // Aquí puedes agregar la lógica para continuar con el pago
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Pago completado",
      visibilityTime: 2000,
    });
    //navegar a la pantalla de formulario
    setModalVisible(false);
    navigator.replace("FormScreenS");
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            ¿Está seguro de proceder al pago con OXXO Pay?
          </Text>
          <Text style={styles.subtitle}>Mondo a pagar: {monto}</Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Cancelar"
              titleStyle={{ color: "#46D29D" }}
              buttonStyle={styles.btnCancelar}
              onPress={handleCancel}
            />
            <Button
              title="Aceptar"
              buttonStyle={styles.btnAceptar}
              onPress={handleContinue}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    height: "40%",
    width: "100%",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 250,
    width: "100%",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 40,
  },
  btnAceptar: {
    backgroundColor: "#46D29D",
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 50,
    //Ajustar el tamaño del boton
    width: 100,
  },
  btnCancelar: {
    backgroundColor: "transparent",
    borderColor: "#46D29D",
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 10,
    width: 100,
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
