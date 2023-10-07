import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailsOrderScreen() {
  const navigator = useNavigation();
  //variable para la referencia
  const [reference, setReference] = useState("1234-56789-10101");
  const handlePress = () => {
    // Aquí puedes agregar la lógica para manejar la información del formulario

    navigator.replace("AmountScreenS");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/bonanza.png")} />
      <View style={styles.formContainer}>
        <Text style={styles.subtitle2}>Monto a pagar:</Text>
        <Text style={styles.subtitle2}>$100.00</Text>
        <Text style={styles.subtitle3}>
          *OXXO cobrará comisión por uso de servicio.
        </Text>
        <Text style={styles.subtitle3}>El precio no se incluye.</Text>
      </View>
      <Text style={styles.subtitle4}>Referencia:</Text>
      <View style={styles.reference}>
        <Text style={styles.subtitle5}>{reference}</Text>
        <Icon
          type="material-community"
          name="content-copy"
          iconStyle={styles.icon}
          onPress={() => {
            handlePress();
          }}
          size={25}
          color="#46D29D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //centrarlo el container en medio de la pantalla

    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  formContainer: {
    marginTop: 70,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    borderRadius: 20,
    backgroundColor: "#46D29D",
    marginTop: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: 20,
  },
  img: {
    position: "absolute", // Añadido
    top: 0,
    left: 0,
    width: 400,
    height: 200, // Ajusta la altura según sea necesario
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
  subtitle3: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 0,
    color: "#40948D",
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitle4: {
    fontSize: 15,
    marginTop: 35,
    textAlign: "left",
    marginBottom: 10,
    color: "#40948D",
    fontWeight: "bold",
    marginLeft: 10,
  },
  reference: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    width: 300,
    alignSelf: "center",
    backgroundColor: "#D7F9EF",
    height: 60,
  },
  subtitle5: {
    fontSize: 25,

    alignSelf: "center",
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 15,
  },
  icon: {
    //alinear hasta la orilla
  },
});
