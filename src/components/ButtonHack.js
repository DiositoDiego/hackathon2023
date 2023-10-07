import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { API_CONTEXT } from "../utils/endpoint";
import { saveData, getData } from "../utils/Storage";

export default function ButtonHack() {
  /*   const { mount } = props;
   */
  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation();

  const createOrder = () => {
    return new Promise(async (resolve, reject) => {
      const idCustomer = await getData("customer");
      console.log("id muy mona:", idCustomer);
      let response;
      try {
        response = await fetch(`${API_CONTEXT}/order/test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: "cash",
            customerId: idCustomer,
            productsList: [
              {
                name: "Sabritas",
                quantity: 2,
                unit_price: 10,
              },
              {
                name: "Barritas",
                quantity: 3,
                unit_price: 15,
              },
              {
                name: "Maruchan",
                quantity: 4,
                unit_price: 20,
              },
            ],
          }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {
            console.log("id de la order plis jala:", data.data.id);
            console.log({ PonleAsyncStorageAEstoPorfi: data.data });
            saveData("order", data.data);
            saveData("orderId", data.data.id);
            console.log("order guardada en el storage:", data.data);
            resolve(data.data);
          } else {
            console.log({ arriba: data });
            console.log("Todo mal");
            resolve([]);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const createCharge = () => {
    return new Promise(async (resolve, reject) => {
      const idOrder = await getData("orderId");
      console.log("id no muy mona de la order:", idOrder);
      let response;
      try {
        response = await fetch(`${API_CONTEXT}/charge/test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 145,
            paymentMethod: "cash",
            orderId: idOrder,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {
            console.log({ PonleAsyncStorageAEstoPorfi: data.data });
            saveData("charge", data.data);
            saveData("reference", data.data.payment_method.reference);
            console.log(
              "id de la order guardada en el storage:",
              data.data.payment_method.reference
            );
            console.log("order guardada en el storage:", data.data);
            resolve(data.data);
          } else {
            console.log({ abajo: data });
            console.log("Todo mal");
            resolve([]);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  };

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
    // En la pantalla anterior
    navigator.navigate("DetailsOrderScreen");
  };

  const handleContinue = () => {
    // Aquí puedes agregar la lógica para continuar con el pago
    //navegar a la pantalla de formulario
    createOrder();
    createCharge();
    setModalVisible(false);
    navigator.navigate("DetailsOrderScreenS");
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            ¿Está seguro de proceder al pago con OXXO Pay?
          </Text>
          <Text style={styles.subtitle}>Monto a pagar: $100</Text>

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
