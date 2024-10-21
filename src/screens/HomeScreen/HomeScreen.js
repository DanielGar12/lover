import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation();
  const onConnectPress = () =>{
    navigation.navigate('ConnectScreen')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home :{')'} </Text>
      <View style={styles.view2}>
        <CustomButton text={'Connect with lover'} onPress={onConnectPress}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    padding: 20,
    flex: 1, 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  view2 : {
    flex: 1,
    justifyContent: 'center',
   
    alignSelf: 'center',
    width: '70%'
  }
})