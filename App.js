import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>HELLO!!!! Glad to see you here!!!</Text>
      <Text>This is your first mob APP!!!</Text>
      <LoginScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
