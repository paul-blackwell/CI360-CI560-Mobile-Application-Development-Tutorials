import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const Item = ({ id, name, quantity, price, increaseItemQuantity, decreaseItemQuantity, removeItem}) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>x{quantity}</Text>
            <Text>£{(price * quantity).toFixed(2)}</Text>
            <Button
                onPress={() => {increaseItemQuantity(id)}}
                title='+'
            />
            <Button
                onPress={() => {decreaseItemQuantity(id)}}
                title='-'
            />
            <Button
                onPress={() => {removeItem(id)}}
                title='remove'
            />
        </View>
    )
};


// const styles = StyleSheet.create({

// });

export default Item;