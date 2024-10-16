import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ChatScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ChatScreen</Text>
      <View style={styles.chatbox}>
        <Ionicons name={'image'}  size ={20}style={{marginLeft: 30, alignSelf: 'center'}} />
        <View style={styles.inputBox}>
            <TextInput placeholder={'Input text here'}/>
            <Ionicons name={'send'} style={{alignSelf: 'center'}}size={15}/>

        </View>
        
      </View>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({

    root: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    chatbox:{
        borderWidth: 1,
        padding: 10,
        width: '100%',
        height: 70,
        flexDirection: 'row',
       
        justifyContent: 'space-between'
    },
    inputBox: {

        backgroundColor: 'white',
        width: '80%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

})