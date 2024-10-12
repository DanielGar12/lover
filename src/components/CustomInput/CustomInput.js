import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder, secureTextEntry}) => {
  return (
    <View style={styles.inputBox}>
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </View>
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