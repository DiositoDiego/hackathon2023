import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import ButtonHack from "../components/ButtonHack";
import { Button, Icon } from "react-native-elements";

export default function AmountScreen() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pago en efectivo con OXXO Pay</Text>
      </View>
      <View style={styles.containerTitle}>
        <Icon
          type="material-community"
          name="cash-multiple"
          iconStyle={styles.icon}
          onPress={() => {
            handlePress();
          }}
          size={50}
          color="#46D29D"
        />
        <Text style={styles.subtitle2}>Monto a pagar: </Text>
      </View>
      <View style={styles.styleContainer}>
        <TextInput style={styles.amount}>$1,000.00</TextInput>
        <Text style={styles.amount}>MXN</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxShadow}></View>
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Proceder al pago"
            onPress={toggleModal}
          />
        </View>
      </View>
      <View style={styles.modalContainer}>
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={toggleModal}
        >
          <ButtonHack onPress={toggleModal} />
        </Modal>
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
    paddingTop: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
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
    width: "100%",
    height: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.9,
    elevation: 5,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 10,
    width: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 250,
    width: "100%",
    borderWidth: 2,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
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
