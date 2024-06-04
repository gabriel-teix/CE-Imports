import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignUpScreen() {
  const navigation = useNavigation

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleHomeClick = () => {
    if (emailField == '') {
      alert('Digite seu email!')
    }
    else if (passwordField == '') {
      alert('Digite sua senha!')
    } else {
      alert('Você está cadastrado!')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View>

        <Text style={styles.cadastroAreaText}>Faça seu cadastro</Text>

          <Image style={styles.perfil2} source={require('../images/perfil.png')} />

            <View style={styles.inputArea2}>
              <Text style={styles.inputLabel2}>Email</Text>
                <TextInput 
                  style={styles.inputField2}
                  placeholder='Digite seu email'
                  value={emailField}
                  onChangeText={t => setEmailField(t)}
                  autoCapitalize='none'
                  keyboardType='email-address'
                />
            </View>

              <View style={styles.inputArea2}>
                <Text style={styles.inputLabel2}>Senha</Text>
                  <TextInput 
                    style={styles.inputField2}
                    placeholder='**********'
                    placeholderTextColor='#d1d1d1'
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    secureTextEntry
                  />
              </View>

                <View style={styles.button2}>  
                  <Button 
                    style={styles.buttonText2}
                    title='Cadastrar-se'
                    onPress={handleHomeClick}
                  />
                </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  },
  inputArea2: {
    width: '80%',
    paddingTop: 20,
    alignSelf: 'center'
  },
  inputLabel2: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField2: {
    color: '#999',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#B0C4DE',
    fontSize: 15,
    padding: 10,
  },
  cadastroAreaText: {
    textAlign: 'center',
    color: '#191970',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  perfil2: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20
  },
  button2: {
    backgroundColor: '#191970',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText2: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
})