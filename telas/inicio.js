import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

// Assuming Login and Cadastro are imported components
import Login from './login';
import Cadastro from './cadastro';

// Define a Stack Navigator in a separate component
const AppNavigator = () => {
 const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

const Inicio = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>EPICARE</Text>
        <ImageBackground 
          source={require('../imagens/logo.png')} 
          style={styles.logoBackground}
        >
          {/* Children components, if any, go here */}
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        {/* Add form fields here */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // This should navigate to a different screen, not "Login" itself
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D7BFF', // Replace with the exact color of your background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBackground: {
    flex: 0.2,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(96, 0, 130, 1)',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: '#5E5DBA', // Replace with the exact button color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonOutlineText: {
    color: '#fff',
  },
});

export default Inicio;
