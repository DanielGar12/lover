import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingsScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
    
      await AsyncStorage.removeItem('User');
      
    
     navigation.navigate('Login')
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

        <Pressable onPress={() => navigation.navigate('InvitationScreen')}>
          <View style={styles.buttonBox}>
          
          <Ionicons name={'mail'} size={25}/>
         <Text>Invitations</Text>
          <Ionicons name={'chevron-forward-outline'} size={25}/>
          </View>
        </Pressable>
        <Pressable onPress={() => Alert.alert('Sign out', 'Are you sure you want to sign out?', [
          
         {
          text: 'No'
         },
         {
          text: 'Yes',
          onPress: handleLogout,
         },

        ])}>
          <View style={styles.buttonBox}>
          
          <Ionicons name={'exit'} size={25}/>
         <Text>Log out</Text>
          <Ionicons name={'chevron-forward-outline'} size={25}/>
          </View>
        </Pressable>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginBottom: 100,
  
  },

  title: {
   
    fontWeight: 'bold',
    fontSize: 30,
  },

  buttonBox: {
    marginTop: 30,
    flexDirection: 'row',
    height: 35,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }

})