import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const Item = ({ name, quantity, price}) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>x{quantity}</Text>
            <Text>£{(price * quantity).toFixed(2)}</Text>
        </View>
    )
};


// const styles = StyleSheet.create({
    
// });

export default Item;