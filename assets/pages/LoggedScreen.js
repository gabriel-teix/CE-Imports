import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function LoggedScreen() {
  return (
    <ScrollView  style={styles.container}>
      <View>

        <Text style={styles.loggedText}>Você está logado!</Text>

          <Image style={styles.perfil3} source={require('../images/perfil.png')} />

            <Text style={styles.instructionText}>Volte à página inicial para fazer o login.</Text>

              <Image style={styles.logo2} source={require('../images/entrega-rapida.png')} />

                <View>
                  <Text style={styles.nameEmpresa2}>CE Imports</Text>
                </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  },
  loggedText: {
    color: '#191970',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginTop: 50
  },
  perfil3: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50
  },
  instructionText: {
    color: '#777',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 60
  },
  logo2: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 250
  },
  nameEmpresa2: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})