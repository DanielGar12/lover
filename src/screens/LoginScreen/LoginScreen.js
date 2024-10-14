import { View, Text, StyleSheet, Image, useWindowDimensions, Button, Pressable} from 'react-native'
import Logo from '../../../assets/adaptive-icon.png'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'


const LoginScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, formState: {errors}} = useForm();
  
  const onLoginPress = () => {
        console.log('nada');
    }
    const onRegisterPress = () =>{
        console.log('Nav to register');
        navigation.navigate('Register');
    }

    const {height} = useWindowDimensions();
  return (
    <View style={styles.view}>
      <Image source = {Logo}
      style={[styles.logo, {height: height * 0.3}]}
      />
      <Text/>
      <CustomInput 
      placeholder={'Username'}
      control={control}
      name={'username'}
      rules={{required: 'Username is required'}}
      />
      <CustomInput
      placeholder={'Password'} 
      secureTextEntry={true}
      control={control}
      name={'password'}
      rules={{required: 'Password is required'}}
      />

      <CustomButton onPress={handleSubmit(onLoginPress)} text={'Login'}/>

      <Text>Not a user? Register here</Text>
      <CustomButton onPress={onRegisterPress} text={'Register'}/>
     
      
    </View>
  )
}


const styles = StyleSheet.create({

    view: {
        padding: 20,
        alignItems: 'center',



    },

    logo: {
        width: '70%',
        maxWidth: 300, 
        maxHeight: 200, 
        marginVertical: 10,
    },




});

export default LoginScreen