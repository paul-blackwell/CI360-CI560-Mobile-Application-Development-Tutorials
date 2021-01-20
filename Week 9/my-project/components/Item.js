import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Item = ({ id, name, quantity, price, increaseItemQuantity, decreaseItemQuantity, removeItem }) => {

    return (
        <View style={styles.item}>
            <Text style={styles.nameText}>{name}</Text>

            <TouchableOpacity style={styles.plusIcon} onPress={() => { increaseItemQuantity(id) }}>
                <AntDesign name="plus" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.minusIcon} onPress={() => { decreaseItemQuantity(id) }}>
                <AntDesign name="minus" size={16} color="black" />
            </TouchableOpacity>

            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>x{quantity}</Text>
            </View>

            <Text style={styles.priceText} >£{(price * quantity).toFixed(2)}</Text>

            <TouchableOpacity style={styles.removeIcon} onPress={() => { removeItem(id) }}>
                <AntDesign name="close" size={16} color="black" />
            </TouchableOpacity>

        </View>
    )
};


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DBDFE0',
        alignItems: 'center'
    },
    nameText: {
        flex: 1,
        color: '#3B4A58'
    },
    quantityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        color: '#ffffff',
        backgroundColor: '#3884FF',
        padding: 8,
        borderRadius: 4
    },
    priceText: {
        flex: 1,
        color: '#3B4A58'
    },
    plusIcon: {
        marginHorizontal: 8
    },
    minusIcon: {
        flex: 2,
        marginHorizontal: 8
    },
    removeIcon: {
        marginLeft: 8
    }

});

export default Item;