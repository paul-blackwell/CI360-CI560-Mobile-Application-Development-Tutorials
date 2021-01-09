import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import DATA from '../data/data';
import Item from '../components/Item';

export default function BookShop() {



  const renderItem = ({ item }) => (
    <Item title={item.title} uri={item.uri} price={item.price} author={item.author} />
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
    margin: 8
  },
  buttonContainer: {
    width: '100%',
    margin: 10,
  },
});