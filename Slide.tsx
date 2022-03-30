import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {DocumentRenderer} from '@keystone-6/document-renderer';
import {renderers} from "./Renderers";
import React from 'react';


//const json = require('./data.json')
//const document = json['data']['slides'][0]['content']['document']

interface SlideProps {
    sequence: number,
    document: any
}

export default function Slide({sequence, document}: SlideProps) {
    return (
        <View style={styles.container}>
            <View style={styles.slide}>
                <View style={styles.sequence}>{sequence}</View>
                <View style={styles.content}>
                    <DocumentRenderer document={document} renderers={renderers}/>
                    <StatusBar style="auto"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: '50px',
        padding: '10px',
        border: '1px solid black'
    },
    sequence: {
        padding: '10px'
    },
    slide: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
