import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Navigation from './src/Navigation'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
   
  },
});
