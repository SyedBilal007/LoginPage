import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="return-up-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.loginText}>Log in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="jane@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={[styles.buttonText, styles.signupButtonText]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 20,
    marginLeft: 20,
  },
  loginText: {
    fontFamily: 'Quicksand',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'black',
  },
  signupButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  signupButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LoginPage;
