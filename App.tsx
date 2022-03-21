import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {DocumentRenderer} from '@keystone-6/document-renderer';
import {renderers} from "./Renderers";

const json = require('./data.json')
const document = json['data']['slides'][0]['content']['document']

export default function App() {
    return (
        <View style={styles.container}>
            <DocumentRenderer document={document} renderers={renderers} />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
