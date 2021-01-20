import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Meals() {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>This is screen two!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    text: {
        paddingVertical: 20,
        fontSize: 20,
    }
});
