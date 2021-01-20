import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
                if(meal.quantity > 1){
                    meal.quantity--;
                }
            }
        })
        updateMeals([...newUpdatedMeals])
    }


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


    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
