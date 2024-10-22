import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import CustomInput from '../../components/CustomInput'
import {useForm, Controller} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
const ConnectScreen = () => {
  
    const {control, handleSubmit, formState: {errors}} = useForm()
    const navigation = useNavigation();

    const onConnectPress = async (data) => {
        const { connection } = data;
    
        try {
            const user = await AsyncStorage.getItem('User'); // Retrieve the stored user data
            const parsedUser = JSON.parse(user); // Parse the stored JSON string to get the user object
           

    
            const response = await axios.post('http://10.125.153.173:3000/invite/send', {
                senderUsername: parsedUser.username,  // Use stored sender's username
                receiverUsername: connection, // Username entered in the input field
            });
    
          
    
            if (response.status === 201) {
                Alert.alert('Success', 'Invite sent to your partner!');
                navigation.navigate('BottomNavBar');
            } else {
                Alert.alert('Error','Failed to send invite. Please try again.');
            }
        } catch (error) {
            console.error('Connection error:', error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };
  
    return (
    <View style={styles.container}>
        <Ionicons name={'heart'} size={100} color={'red'}/>
      <Text style={styles.title}>Connect with your loved one</Text>
      <View style={styles.components}>
        
      <CustomInput
      name={'connection'}
      placeholder={'Enter username'}
      control={control}
      rules={{required: 'Must input username'}}
      
      
      />

      <CustomButton text={'Connect'} onPress={handleSubmit(onConnectPress)}/>
      </View>
    </View>
  )
}

export default ConnectScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 20,
        alignItems: 'center',
    

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    components: {
        flex: 1,
        marginTop: 35,
        width: '100%',
    }
})