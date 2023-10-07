import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { API_CONTEXT } from "../utils/endpoint";

export default function FormScreen() {
    const navigator = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createCustomer = () => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        response = await fetch(`${API_CONTEXT}/customer/test`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {

            console.log({dataFromFORMMMMM:data.data});
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
  const handlePress = () => {
    createCustomer();
    // Aquí puedes agregar la lógica para manejar la información del formulario
    navigator.navigate("AmountScreenS");
  };

  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>
            Llena el siguiente formulario:
        </Text>
      <View style={styles.formContainer}>
        <Text>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text>Número de Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Text>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          title="Proceder al pago"
          onPress={() => handlePress()}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //centrarlo el container en medio de la pantalla
    justifyContent: "center",
    
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  formContainer: {
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
});
