import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../pages/HomeScreen'
import SignUpScreen from '../pages/SignUpScreen'
import LoggedScreen from '../pages/LoggedScreen'

const MainStack = createNativeStackNavigator();
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen 
        name='Home' 
        component={HomeScreen} 
      />

      <MainStack.Screen name='SignUp' component={SignUpScreen} option={
        ({route})=>({
            title: route.params?.name
          })
        }
      />

        <MainStack.Screen 
          name='Logged'
          component={LoggedScreen}
        />
    </MainStack.Navigator>
  )
}