import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigationBar from './BottomNavigationBar';
import ConnectScreen from '../screens/ConnectScreen';
import InvitationScreen from '../screens/InvitationScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='BottomNavBar' component={BottomNavigationBar}/>
            <Stack.Screen name='ConnectScreen' component={ConnectScreen}/>
            <Stack.Screen name={'InvitationScreen'} component={InvitationScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;