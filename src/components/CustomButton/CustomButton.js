import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}


export default CustomButton

const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'magenta',
        marginVertical: 20,
        borderRadius: 5
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
    },


})