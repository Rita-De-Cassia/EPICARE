import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import principal from "../telas/principal";

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState (null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Principal'}]
    })
  }


  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h1>EPICARE</Text>
      <Input 
      placeholder='Login'
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      />

      <Input 
      placeholder='Password'
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button 
      icon={
        <Icon 
          name='check'
          size={15}
          color='white'
        />
      }
        title='Entrar'
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />

    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: 'rgba(72, 77, 205, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    widht: '100%',
    marginTop: 10
  }
});
