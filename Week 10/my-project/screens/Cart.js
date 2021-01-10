import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { CartContext } from '../context/cart.context';

import CartItem from '../components/CartItem';


export default function Cart() {

    const renderItem = ({ item }) => (
        <CartItem title={item.title} uri={item.uri} price={item.price} author={item.author} id={item.id} />
    );

    // Get cart array from the context API
    const { cart } = useContext(CartContext);

    // Set shipping cost (would come for Database)
    const shippingCost  = 2.50;


    // Get the value of all items in the cart 
    const cartValue = () => {
        let total = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                total += item.price
            })
            return total;
        } else {
            return 0.00
        }

    }

    // Get cart total
    const cartTotal = (shippingCost + cartValue()).toFixed(2);


    if (cart.length === 0) {
        return (
            <View style={styles.container}>
                <Text>You currently have no items in the cart.</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={cart} // will get this from context API
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text style={styles.subtotalNumber}>${cartValue().toFixed(2)}</Text>
            </View>
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Shipping</Text>
                <Text style={styles.subtotalNumber}>${shippingCost.toFixed(2)}</Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalNumber}>${cartTotal}</Text>
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