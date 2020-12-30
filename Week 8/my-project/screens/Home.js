import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';

import Data from '../data/Data';





export default function Home() {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.id}</Text>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <View style={styles.box}><Text>Box 1</Text></View>
    //   <View style={styles.box}><Text>Box 2</Text></View>
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-around'
  },
  itemContainer: {
    width: '100%',
    backgroundColor: '#3884FF'
  }
  // box: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#fff',
  //   borderColor: '#000000',
  //   borderWidth: 1,
  //   margin: 4
  // }
});
