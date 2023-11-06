import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Cadastro from './telas/cadastro';
import Login from './telas/login';

function Inicio({navigation}) {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login');
  };

  const Cadastro = () => {
    navigation.navigate('Cadastro') 
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../imagens/logo.png')} style={styles.background} opacity={0.02} >
        <Text style={styles.title}>EPICARE</Text>
        <View style={styles.buttons}>
          <Button title="LOGIN" buttonStyle={[styles.button1, styles.login]} onPress={() => Login()}/>
          <Button title="CADASTRE-SE" buttonStyle={[styles.button2, styles.subscribe]} onPress={() => Cadastro()}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(72, 77, 205, 0.54)',
    marginBottom: 180,
  },
  buttons:{
    flexDirection:'row'
  },
  button1:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5
  },
  button2:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5
  },
  login:{
      backgroundColor:'rgba(96, 0, 130, 1)',
      color: 'rgba(255, 255, 255, 1)'
  },
  subscribe:{
      backgroundColor:'rgba(96, 0, 130, 1)',
      color: 'rgba(255, 255, 255, 1)'
  }
});

export default Inicio;
