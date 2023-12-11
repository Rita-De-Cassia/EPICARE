import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; // Importação correta


import Login from './login';
import Cadastro from './cadastro';
import Principal from './principal';


const AppNavigator = () => {
 const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

const Login = ({ navigation }) => {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('CNPJ:', cnpj, 'Password:', password);
    navigation.navigate('Principal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>EPICARE</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>CNPJ</Text>
          <TextInput
            value={cnpj}
            onChangeText={setCnpj}
            style={styles.input}
            placeholder="Enter your CNPJ"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>SENHA</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(72, 77, 205, 0.54)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingLeft: 15,
  },
  input: {
    backgroundColor: 'rgba(140, 90, 220, 0.5)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50, // You can adjust the height
    marginTop: 5,
  },
  button: {
    backgroundColor: 'rgba(140, 90, 220, 0.5)', // Adjust the color as needed
    borderRadius: 10,
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
