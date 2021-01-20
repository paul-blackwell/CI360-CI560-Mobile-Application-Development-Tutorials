import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DATA from '../data/data'
import Item from '../components/Item';

export default function Meals() {

    const renderItem = ({ item }) => (
        <Item name={item.name} quantity={item.quantity} price={item.price} />
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
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
