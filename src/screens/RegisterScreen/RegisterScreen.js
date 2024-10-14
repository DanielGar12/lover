import { View, Text, StyleSheet, Image, useWindowDimensions, Button, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/adaptive-icon.png' 
import {useForm, Controller} from 'react-hook-form'
const RegisterScreen = () => {

    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();
  
    const onRegisterPress = () => {
          console.log('nada');
      }
      const onLoginPress = () =>{
          console.log('Nav to Login');
          navigation.navigate('Login');
      }
  
      const {height} = useWindowDimensions();
    return (
        <View style={styles.view}>
          <Image source = {Logo}
          style={[styles.logo, {height: height * 0.3}]}
          />
          <Text/>
          <CustomInput 
          placeholder={'First Name'}
          control={control}
          rules={{required: 'First name is required'}}
          name={'firstname'}
          />
          <CustomInput 
          placeholder={'Last Name'}
          control={control}
          rules={{required: 'Last name is required'}}
          name={'lastname'}
          />
          <CustomInput 
          placeholder={'Username'}
          control={control}
          rules={{required: 'Username is required'}}
          name={'username'}
          />
          <CustomInput 
          placeholder={'Password'} 
          secureTextEntry={true}
          control={control}
          rules={{required: 'Password is required'}}
          name={'password'}
          />
    
          <CustomButton onPress={handleSubmit(onRegisterPress)} text={'Register'}/>
    
          <Text>already a user? Login here</Text>
          <CustomButton onPress={onLoginPress} text={'Login'}/>
         
          
        </View>
      )
}

export default RegisterScreen;

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