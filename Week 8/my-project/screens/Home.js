import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import Data from '../data/Data';





export default function Home() {

  // This is what will actually be rendered for each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: item.uri,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        // need to pass in the data [{id: 1, uri: 'some_image_url' },{id: 2, uri: 'some_image_url' }...]
        data={Data}
        // what we want to render
        renderItem={renderItem}
        // set key for each item as React will get confused
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 4,
  },
  flatList: {
    width: '100%',
    marginLeft: 8
  },
 
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 200,
    margin: 4,
    backgroundColor: '#3884FF',
  },
  image: {
    width: '100%',
    height: 200
  },
});
