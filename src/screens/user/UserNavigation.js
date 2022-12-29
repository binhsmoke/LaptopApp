import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from './screens/Login';
import Register from './screens/Register';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={Login}></Stack.Screen>
    <Stack.Screen name='Register' component={Register}></Stack.Screen>
    {/* <Stack.Screen name='FogotPassword' component={FogotPassword}></Stack.Screen> */}
</Stack.Navigator>
  )
}

export default UserNavigation