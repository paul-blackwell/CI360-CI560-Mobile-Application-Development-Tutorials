import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

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
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text style={styles.subtotalNumber}>$90.00</Text>
            </View>
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Shipping</Text>
                <Text style={styles.subtotalNumber}>$10.00</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalNumber}>$100.00</Text>
            </View>
            <View style={styles.checkoutButton}>
                <Button title="Proceed to checkout" onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    subtotalContainer: {
        flexDirection: 'row',
        marginVertical: 4
    },
    subtotalText: {
        flex: 3,
        color: '#767676'
    },
    subtotalNumber: {
        //flex: 1,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
        color: '#767676'
    },
    totalContainer: {
        flexDirection: 'row',
        marginVertical: 4
    },
    totalText: {
        flex: 3,
        fontSize: 18
    },
    totalNumber: {
        //flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
    },
    text: {
        paddingVertical: 20,
        fontSize: 20,
    },
    checkoutButton: {
        marginVertical: 16
    }
});