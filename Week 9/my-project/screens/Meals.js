import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DATA from '../data/data'
import Item from '../components/Item';


export default function Meals() {

    // Initialise state to be our Data '{ id: 1, name: 'Rice', quantity: 1, price: 0.40   }...,
    const [meals, updateMeals] = useState(DATA);


    //This will remove an item based on its ID from the state
    const handleRemoveItem = (id) => {
        updateMeals(meals.filter(meal => meal.id !== id))
    }

    /**
     * This will increase an item's quantity by one when 
     * fired based on its ID
     */
    const handleIncreaseItemQuantity = (id) => {
        const newUpdatedMeals = meals;
        newUpdatedMeals.forEach(meal => {
            if (meal.id === id) {
                meal.quantity++;
            }
        })
        updateMeals([...newUpdatedMeals])
    }

    /**
     * This will decrease an item's quantity by one when 
     * fired based on its ID, will only do this if
     * the item's quantity is greater than one
     */
    const handleDecreaseItemQuantity = (id) => {
        const newUpdatedMeals = meals;
        newUpdatedMeals.forEach(meal => {
            if (meal.id === id) {
                if (meal.quantity > 1) {
                    meal.quantity--;
                }
            }
        })
        updateMeals([...newUpdatedMeals])
    }


    /**
     * This will render each Item in the FlatList
     */
    const renderItem = ({ item }) => (
        <Item
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            removeItem={handleRemoveItem}
            increaseItemQuantity={handleIncreaseItemQuantity}
            decreaseItemQuantity={handleDecreaseItemQuantity}
        />
    );

    const getTotal = () => {
        let totalPrice = 0;
        meals.forEach(meal => {
            totalPrice += (meal.price * meal.quantity)
        })
        return totalPrice.toFixed(2);
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.total}>
                <Text style={styles.totalText} >Total: £{getTotal()}</Text>
            </View>
            <TouchableOpacity style={styles.checkout} onPress={() => {}}>
                <Text style={styles.checkoutText}>Checkout <AntDesign name="arrowright" size={16} color="#ffffff" /></Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 28
    },
    total: {
        marginBottom: 20
    },
    totalText: {
        color: '#3B4A58'
    },
    checkout: {
        alignItems: 'center',
        backgroundColor: '#3884FF',
        padding: 8,
        borderRadius: 4
    },
    checkoutText: {
        color: '#ffffff',
    },
    checkoutIcon: {

    }
});
