import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import ButtonHack from "../components/ButtonHack";
import { Button, Icon } from "react-native-elements";
import { useEffect } from "react";
import { API_CONTEXT } from "../utils/endpoint";

export default function AmountScreen() {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [mount, setMount] = useState("50");
  const [customer, setCustomer] = useState({});
  const [order, setOrder] = useState({});
  const [charge, setCharge] = useState({});

  const handleInputChange = (value) => {
    setMount(value);
  };

  const createOrder = async () => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        response = await fetch(`${API_CONTEXT}/customer/test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: "cash",
            customerId: "cus_2ugwJMKq2NtZPAbmT",
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
            console.log({PonleAsyncStorageAEstoPorfi:data.data});
            resolve(data.data);
          } else {
            console.log("Todo mal");
            resolve([]);
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const createCharge = async () => {
    setCharge(
      await fetch(`${API_CONTEXT}/charge/test`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 145,
          paymentMethod: "cash",
          orderId: order.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => data)
    );
  };

  const toggleModal = () => {
    console.log("mount", mount);
    setShowModal(!showModal);
    try {
      //createCustomer();
      //createOrder();
      //createCharge();
    } catch (error) {
      console.log(error);
      setErrorModal(true);
    }
    //Enviar el monto al modal
  };
  const toggleErrorModal = () => {
    setErrorModal(!errorModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titlee}>Pago en efectivo con OXXO Pay</Text>
      </View>
      <View style={styles.containerTitle}>
        <Icon
          type="material-community"
          name="cash-multiple"
          iconStyle={styles.icon}
          size={50}
          color="#46D29D"
        />
        <Text style={styles.subtitle2}>Monto a pagar: </Text>
      </View>
      <View style={styles.styleContainer}>
        <Text style={styles.amount}>$</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={handleInputChange}
          style={styles.amount}
        >
          {mount}
        </TextInput>
        <Text style={styles.amount}>MXN</Text>
      </View>
      {/* CONFIRMATION MODAL */}
      <View style={styles.modalContainer}>
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}
        >
          <ButtonHack onPress={toggleModal} mount={mount} />
        </Modal>
      </View>
      {/* ERROR MODAL */}
      <View style={styles.modalContainer}>
        <Modal
          visible={errorModal}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleErrorModal}
        >
          <ButtonHack onPress={toggleModal} mount={mount} />
        </Modal>
      </View>
      <View style={styles.footer}>
        {/* <View style={styles.boxShadoww}></View> */}
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Proceder al pago"
            onPress={() => {
              //pasa el monto al modal
              toggleModal();
              //Enviar el monto al modal
            }}
          />
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
    backgroundColor: "#46D29D",
    height: 90, // Cambié el valor a 70 píxeles
    width: "100%",
    justifyContent: "center",
  },
  titlee: {
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
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
    borderColor: "#000",
    elevation: 5,
  },
  /* boxShadoww: {
    position: "absolute",
    width: "100%",
    height: 80,
    backgroundColor: "transparent",
    elevation: 78,
  }, */
  footer: {
    width: "100%",
    height: 100,
    elevation: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 10,
    width: "100%",
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    height: 250,
    width: "100%",
    borderWidth: 2,
    //Tornar opaco el fondo de la pantalla
    opacity: 0.9,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle2: {
    fontSize: 25,
    marginTop: 15,
    textAlign: "center",
    marginBottom: 15,
    color: "#40948D",
    fontWeight: "bold",
    marginLeft: 10,
  },
  styleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    //alinear contenido en el centro
    alignSelf: "center",
    width: "95%",
    borderRadius: 10,
    backgroundColor: "#D7F9EF",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //alinear contenido en el centro
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  amount: {
    fontSize: 30,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
