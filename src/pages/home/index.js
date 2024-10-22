import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal/index.js';
 
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() *n));
    }

    setPasswordValue(password);
    setModalVisible(true);

  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/images/logo.png")} />
      <Text style={styles.title}>{size} caractere</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>

    </View>
  );
}

// StyleSheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
