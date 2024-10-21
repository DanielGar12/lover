import { View, Text, StyleSheet, Image, useWindowDimensions, Button, Pressable, Alert} from 'react-native'
import Logo from '../../../assets/adaptive-icon.png'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, formState: {errors}} = useForm();
  
  const onLoginPress = async(data) => {
        try{
          const res = await axios.post('http://192.168.1.195:3000/login', {
            username: data.username,
            password: data.password
          })

          if(res.status === 200){
            const user = res.data.user; // Assuming the API returns user details as 'user'
            console.log('Login successful');

            // Store the user data in AsyncStorage
            await AsyncStorage.setItem('User', JSON.stringify(user)); // Store the user object

            // Navigate to the next screen
            navigation.navigate('BottomNavBar');
          }
          else{
            console.log('There was an error in the login')
          }
          
        }
        catch(error){
          Alert.alert('Failed to Login', 'Wrong username or password')
          console.error('Error when logging in: ', error)
        }
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