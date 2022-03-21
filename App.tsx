import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const json = require('./data.json')

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start creating your app!</Text>
      <Text>{JSON.stringify(json)}</Text>
      <StatusBar style="dark" />
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
