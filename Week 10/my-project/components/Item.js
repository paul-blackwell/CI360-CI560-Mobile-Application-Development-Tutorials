
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { CartContext } from '../context/cart.context';

const Item = ({ title, author, uri, price }) => {

    const { dispatch } = useContext(CartContext);


    return (
        <View style={styles.item} >
            <Image style={styles.image} source={{ uri: uri }} />
            <View style={styles.description}>
                <Text style={styles.title}><Text style={styles.bold}>Title: </Text>{title}</Text>
                <Text style={styles.author}><Text style={styles.bold}>Author: </Text>{author}</Text>
                <Text style={styles.price}><Text style={styles.bold}>Price: </Text>£{price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Add to cart"
                    onPress={() => {
                        dispatch({ type: "ADD", book: {title: title, price: price, author: author, uri: uri }});
                    }}
                />
            </View>
        </View >
    )
};


const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        marginTop: 10,
        marginBottom: 20,
        padding: 16
    },
    description: {
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {

    },
    bold: {
        fontWeight: 'bold'
    },
    author: {

    },
    price: {

    },
    buttonContainer: {

    },
    button: {
        width: 50
    }
});

export default Item;