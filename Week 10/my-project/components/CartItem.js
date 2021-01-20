import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/cart.context';
import { AntDesign } from '@expo/vector-icons';


const CartItem = ({ title, author, uri, price, id }) => {

    const { dispatch } = useContext(CartContext);

    return (
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: uri }} />
            <View style={styles.description}>
                <Text style={styles.bold}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
            <View style={styles.quantity}>
                <Text style={styles.quantityText}>x 1</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.bold}>£{price.toFixed(2)} </Text>
            </View>
            {/* TouchableOpacity has an onPress action, so we can wrap  a
            "Close" icon react component within it, allowing the icon to have
            onPress functionality like a button component
            */}
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => {
                    dispatch({ type: "REMOVE", id: id })
                }}
            >
                {/* This is just the icon */}
                <AntDesign name="close" size={24} color="#000000" />
            </TouchableOpacity>
        </View>

    );

}



const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DBDFE0',
    },
    description: {
        //alignItems: 'center'
        marginLeft: 8
    },
    image: {
        width: 48,
        height: 48
    },
    bold: {
        fontWeight: 'bold'
    },
    author: {
        fontSize: 14,
        color: '#767676'
    },
    quantity: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        color: '#767676'
    },
    price: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeButton: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default CartItem;