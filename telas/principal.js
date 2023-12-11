import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';


import Inicio from './inicio';
import Login from './login';
import Cadastro from './cadastro';
import Principal from './principal';
import Normas from './normas';
import Colaborador from './colaborador';

const AppNavigator = () => {
 const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Normas" component={Normas} />
      <Stack.Screen name="Colaborador" component={Colaborador} />
    </Stack.Navigator>
  );
};

const Principal = () => {
  const handleMenuItemPress = (menuItem) => {
    // Placeholder navigation paths - you can replace these with your actual navigation logic.
    switch (menuItem) {
      case 'SEGURANÇA DO TRABALHO':
        // Navigate to the 'SEGURANÇA DO TRABALHO' screen.
        console.log('./seguranca.js');
        break;
      case 'SAÚDE OCUPACIONAL':
        // Navigate to the 'SAÚDE OCUPACIONAL' screen.
        console.log('./saude.js');
        break;
      case 'TREINAMENTOS E CONSULTORIA':
        // Navigate to the 'TREINAMENTOS E CONSULTORIA' screen.
        console.log('./treinamento.js');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={styles.header}>EPICARE</Text>
      <Image
          source={require('./imagens/logo.png')} 
          style={styles.logoBackground}>
        </Image>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('SEGURANÇA DO TRABALHO')}
      >
        <Image source={require('../imagens/seguranca.png')} style={styles.icon} />
        <Text style={styles.menuItemText}>SEGURANÇA DO TRABALHO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('SAÚDE OCUPACIONAL')}
      >
        <Image source={require('../imagens/saude.png')} style={styles.icon} />
        <Text style={styles.menuItemText}>SAÚDE OCUPACIONAL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleMenuItemPress('TREINAMENTOS E CONSULTORIA')}
      >
        <Image source={require('../imagens/treinamento.png')} style={styles.icon} />
        <Text style={styles.menuItemText}>TREINAMENTOS E CONSULTORIA</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../imagens/inicio.jpg')} style={styles.navIcon} />
          <Text style={styles.navItemText}>INÍCIO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../imagens/normas.jpg')} style={styles.navIcon} />
          <Text style={styles.navItemText}>NORMAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../imagens/colaborador.jpg')} style={styles.navIcon} />
          <Text style={styles.navItemText}>COLABORADORES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    width: '100%',
    height: '30%',
    color: 'rgba(96, 0, 130, 1)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
    height: '30%',
    color: 'rgba(96, 0, 130, 1)',
    textAlign: 'center',
    marginVertical: 20,
    padding: 50,
    backgroundColor: '#7D7BFF',
  },
  logoBackground: {
    flex: 0.2,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    margin: 10,
  },
  menuItemText: {
    fontSize: 18,
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navItemText: {
    fontSize: 12,
    color: '#000',
  },
});

export default Principal;
