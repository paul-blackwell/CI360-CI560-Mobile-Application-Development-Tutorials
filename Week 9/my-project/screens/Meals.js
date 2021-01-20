import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DATA from '../data/data'
import Item from '../components/Item';

export default function Meals() {

    const [meals, updateMeals] = useState(DATA);


    const handleRemoveItem = (id) => {
        updateMeals(meals.filter(meal => meal.id !== id))
    }


    const renderItem = ({ item }) => (
        <Item id={item.id} name={item.name} quantity={item.quantity} price={item.price} removeItem={handleRemoveItem} />
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
