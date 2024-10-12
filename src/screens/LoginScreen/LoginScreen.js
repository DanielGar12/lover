import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/adaptive-icon.png'
import React from 'react'
import CustomInput from '../../components/CustomInput'


const LoginScreen = () => {

    const {height} = useWindowDimensions();
  return (
    <View style={styles.view}>
      <Image source = {Logo}
      style={[styles.logo, {height: height * 0.3}]}
      />
      <Text/>
      <CustomInput placeholder={'Username'}/>
      <CustomInput placeholder={'Password'} secureTextEntry={true}/>
      
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
    },



});

export default LoginScreen