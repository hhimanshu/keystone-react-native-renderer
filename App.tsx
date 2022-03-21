import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

const json = require('./data.json')
const document = json['data']['slides'][0]['content']['document']

export default function App() {
    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(document)}</Text>
            <StatusBar style="dark"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '16px'
        // justifyContent: 'center',
    },
});
