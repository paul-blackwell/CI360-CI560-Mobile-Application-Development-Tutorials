import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CartItem from '../components/CartItem';

const dummyData = [
    { id: 1, title: 'Book 1', author: 'Roxy Traynor', price: 2.00, uri: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' },
    { id: 2, title: 'Book 2', author: 'Angharad Hull', price: 1.00, uri: 'https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg' },
]



export default function Cart() {

    const renderItem = ({ item }) => (
        <CartItem title={item.title} uri={item.uri} price={item.price} author={item.author} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={dummyData} // will get this from context API
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View>
                <Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 8
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