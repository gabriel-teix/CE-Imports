import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Button } from 'react-native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const {name} = useState('')

  const handleAboutClick = () => {
    
    if (emailField == '') {
      alert('Digite seu email!')
    }
    else if (passwordField == '') {
      alert('Digite sua senha!')
    } else {
      alert('Você está logado!')
    }
    navigation.navigate('Logged', {name: name})
  }

  const handleForgotButton = () => {
    if (emailField == '') {
      alert('Digite seu email!')
    } else {
      alert('Abra o link de redefinição que enviamos para o seu email.')
    }
  }

  const handleSignUpButton = () => {
    navigation.navigate('SignUp', {name: name})
  }

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../images/entrega-rapida.png')} />

          <View>
            <Text style={styles.nameEmpresa}>CE Imports</Text>
          </View>

            <Text style={styles.h1}>Rastreie sua encomenda!</Text>

              <Text style={styles.h2}>Bem-vindo(a) Digite seus dados abaixo.</Text>

                <View style={styles.inputArea}>
                  <Text style={styles.inputLabel}>Email</Text>
                    <TextInput 
                      style={styles.inputField}
                      placeholder='Digite seu email'
                      placeholderTextColor='#d1d1d1'
                      value={emailField}
                      onChangeText={t => setEmailField(t)}
                      autoCapitalize='none'
                      keyboardType='email-addres'
                    />
                </View>

                  <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>Senha</Text>
                      <TextInput 
                        style={styles.inputField}
                        placeholder='**********'
                        placeholderTextColor='#d1d1d1'
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        secureTextEntry
                      />
                  </View>

                    <View style={styles.aditionals}>
                      <TouchableOpacity style={styles.forgotBtnArea}
                      onPress={handleForgotButton}>
                        <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
                      </TouchableOpacity>
                    </View>

                      <View style={styles.button}>
                        <Button 
                          style={styles.buttonText}
                          title='Entrar'
                          onPress={handleAboutClick}
                        />
                      </View>

                        <View style={styles.signUpArea}>
                          <Text style={styles.signUpText}>Não tem conta?</Text>
                            <TouchableOpacity 
                            onPress={handleSignUpButton}>
                              <Text style={styles.signUpBtnText}>Cadastra-se</Text>
                            </TouchableOpacity>
                        </View>

                          <View style={styles.footerArea}>
                            <Text style={styles.footerText}>Criado por Gabriel</Text>
                          </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
  },
  h1: {
    color: '#191970',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#777',
    fontSize: 15,
  },
  inputArea: {
    width: '100%',
    paddingTop: 20,
  },
  inputLabel: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#999',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#B0C4DE',
    fontSize: 15,
    padding: 10,
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  button: {
    backgroundColor: '#191970',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6A5ACD',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#999',
  },
  nameEmpresa: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})