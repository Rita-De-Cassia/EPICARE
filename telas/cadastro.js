import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState (null)
  const [Cpf, setCpf] = useState (null)
  const [telefone, setTelefone] = useState (null)
  const [senha, setSenha] = useState (null)
  const [isSelected, setSelected] = useState (false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)

    if(email == null){
      setErrorEmail('Preencha seu E-mail         corretamente')
      error = true
    }
    if(Cpf == null){
      setErrorEmail('Preencha seu CPF corretamente')
      error = true
    }
    if(nome == null){
      setErrorEmail('Preencha seu Nome')
      error = true
    }
    if(telefone == null){
      setErrorEmail('Preencha seu Telefone')
      error = true
    }
    return !error
  }
  

  const salvar = () => {
    if (validar()){
    console.log ('Cadastro Realizado com Sucesso')
    }
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input 
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => 
        setEmail(value)
      }
      keyboardType='email-address'
      returnKeyType='done'
      errorMessage={errorEmail}
      />
      <Input 
      placeholder='Nome Completo'
      leftIcon={{ type: 'font-awesome', name: 'user'}}
      onChangeText={value => 
        setNome(value)
      }
      returnKeyType='done'
      errorMessage={errorNome}
      />
      <Input 
      placeholder='Cpf'
      leftIcon={{ type: 'font-awesome', name: 'id-card'}}
      onChangeText={value => 
        setCpf(value)
      }
      keyboardType='number-pad'
      returnKeyType='done'
      errorMessage={errorCpf}
      />
      <Input 
      placeholder='Telefone'
      leftIcon={{ type: 'font-awesome', name: 'phone'}}
      onChangeText={value => 
        setTelefone(value)
      }
      keyboardType='phone-pad'
      returnKeyType='done'
      errorMessage={errorTelefone}
      />
      <Input 
      placeholder='Senha'
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setSenha(value)}
      returnKeyType='done'
      />
       
      <CheckBox
        title='Eu aceito os termos de uso'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor='purple'
        uncheckedColor='red'
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />

      <Button 
      icon={
        <Icon 
          name='user'
          size={15}
          color='white'
        />
      }
        title='Salvar'
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
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