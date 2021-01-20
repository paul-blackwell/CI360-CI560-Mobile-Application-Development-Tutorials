import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Item = ({ id, name, quantity, price, increaseItemQuantity, decreaseItemQuantity, removeItem }) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>x{quantity}</Text>
            <Text>£{(price * quantity).toFixed(2)}</Text>

            <TouchableOpacity  onPress={() => { increaseItemQuantity(id) }}>
                <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { decreaseItemQuantity(id) }}>
                <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { removeItem(id) }}>
                <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
};


const styles = StyleSheet.create({

});

export default Item;