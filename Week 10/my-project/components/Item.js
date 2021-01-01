
import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';


const Item = ({ title, author, uri, price }) => (

    <View style={styles.item}>
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

                }}
            />
        </View>
    </View>
);


const styles = StyleSheet.create({
    item: {
        marginBottom: 50
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