import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Login from './login';
import Inicio from './inicio';
import Cadastro from './cadastro';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

 const Stack = createStackNavigator();
  const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};


const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>EPICARE</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome da Empresa"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="CNPJ da Empresa"
          value={cnpj}
          onChangeText={setCnpj}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="CEP da Empresa"
          value={cep}
          onChangeText={setCep}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Repetir a Senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D7BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#5E5DBA',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cadastro;
