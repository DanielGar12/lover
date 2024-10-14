import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {Controller} from 'react-hook-form';
const CustomInput = ({placeholder, secureTextEntry, control, name, rules}) => {
  return (
    <Controller
    control={control}
    name={name}
    rules={rules}
    render={ ({field: {value, onChange, onBlur}, fieldState: {error}}) => (
    <>
    <View style={[styles.inputBox, {borderColor: error ? 'red' : '#e8e8e8'}]}>
      <TextInput placeholder={placeholder}
       secureTextEntry={secureTextEntry} 
       onChangeText={onChange}
       onBlur={onBlur}
       value={value}

       
       />
    </View>
    { error && ( <Text style={{color: 'red', alignSelf: 'stretch'}}> {error.message || 'Error'}</Text> )}
      </>
  )}
      />
  )
}

export default CustomInput;

const styles = StyleSheet.create({

    inputBox: {

        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,

    }

});