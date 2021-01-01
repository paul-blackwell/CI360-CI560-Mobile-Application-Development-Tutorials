import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Cart() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>This the Cart</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5C5C'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#FF5C5C'
    },
    text: {
        paddingVertical: 20,
        fontSize: 20,
    }
});