import { View, Text, StyleSheet, FlatList, Alert, Button, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'





const InvitationScreen = () => {
    const [invitations, setInvitations] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchInvitations = async () => {
        try {
            const user = await AsyncStorage.getItem('User');
            const parsedUser = JSON.parse(user);
    
          
            const response = await axios.get(`http://10.125.153.173:3000/invitations/${parsedUser.username}?status=pending`);
            
            if (response.status === 200) {
                setInvitations(response.data.invitations); 
            } else {
                console.error('Failed to fetch invitations');
            }
        } catch (error) {
            console.error('Error fetching invitations:', error);
            Alert.alert('Error', 'Failed to load invitations');
        } finally {
            setLoading(false);
        }
    };
    
          
  
      fetchInvitations();
    }, []);


  onAcceptPress = async(inviteId) => {
    try{
        const res = await axios.post('http://10.125.153.173:3000/invite/respond', {
            inviteId: inviteId,
            status: 'accepted'
        })
        if (res.status === 200) {
            Alert.alert('Success', 'Invitation accepted!');
            setInvitations(invitations.filter(invite => invite._id !== inviteId)); // Remove the accepted invite
          }
    }
    catch(error){
        console.error('Error accepting invite', error)
    }
  }
  const onRejectPress = async (inviteId) => {
    try {
      const res = await axios.post('http://10.125.153.173:3000/invite/respond', {
        inviteId: inviteId,
        status: 'rejected',
      });
      
      if (res.status === 200) {
        Alert.alert('Success', 'Invitation rejected');
      
        setInvitations(invitations.filter(invite => invite._id !== inviteId));
      }
    } catch (error) {
      console.error('Error rejecting invite:', error);
      Alert.alert('Error', 'Failed to reject invitation');
    }
  };
  

  const navigation = useNavigation();

  const renderInvitation = ({ item }) => (
    <View style={styles.invitation}>
      <Text>{item.senderUsername} sent you an invitation</Text>
      <View style={styles.buttons}>
        <Button title="Accept" onPress={() => onAcceptPress(item._id)} />
        {/* <CustomButton text={'Accept'} onPress={onAcceptPress(item._id)}/> */}
        <Button title="Reject" onPress={() => onRejectPress(item._id)} />
        {/* <CustomButton text={'Reject'}/> */}
      </View>
    </View>
  );

    return (
    <View style={styles.container}>
        <View style={styles.topBox}>
            <Pressable onPress={() => navigation.navigate('BottomNavBar') } style={styles.backButton}>
            <View>
                
            <Ionicons name={'chevron-back-outline'} size={20} color={'blue'}/>
            <Text style={styles.backText}>Back</Text>
            </View>
            </Pressable>
            <Text style={styles.title}>Invitations</Text>
        </View>
      <View style={styles.invitationBox}>
      
      {loading ? (
          <Text>Loading...</Text>
          ) : invitations.length > 0 ? (
              <FlatList
              data={invitations}
              renderItem={renderInvitation}
              keyExtractor={(item) => item._id}
              />
              ) : (
                  <Text>No invitations found.</Text>
                  )}
    </View>
    </View>
  )
}

export default InvitationScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // padding: 20,
        
    },

    topBox: {
        borderBottomWidth: 1,
    borderColor: 'gray',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
       
    },

    invitationBox: {
        marginVertical: 30,
    },

    invitation: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginBottom: 10,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      backButton: {
        flexDirection: 'row',
        alignItems: 'center',
       
      },

      title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      backText: {
        color: 'blue',
        fontSize: 20,
        marginLeft: 10,
      },


})