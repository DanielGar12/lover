import { View, Text, StyleSheet, Image, useWindowDimensions, Alert} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/adaptive-icon.png' 
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios'

const RegisterScreen = () => {

    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();
  
    const onRegisterPress = async (data) => {
          try{
            const res = await axios.post('http://localhost:3000/users', {
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                password: data.password
            })
            if(res.status === 201){
                console.log('Successfully created the user');
                Alert.alert('Success', 'User has been created successfully!!')
                navigation.navigate('Login');
            }
            else{
                console.log('There was an error making the user')
            }

          }
          catch(error){
            console.error('Something went wrong during registration (catch): ', error)
          }
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
          name={'firstName'}
          />
          <CustomInput 
          placeholder={'Last Name'}
          control={control}
          rules={{required: 'Last name is required'}}
          name={'lastName'}
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