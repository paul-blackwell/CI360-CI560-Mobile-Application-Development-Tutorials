import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';

import Data from '../data/Data';





export default function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.item}><Text>Box 1</Text></View>
      <View style={styles.item}><Text>Box 2</Text></View>
      <View style={styles.item}><Text>Box 3</Text></View>
      <View style={styles.item}><Text>Box 4</Text></View>
      <View style={styles.item}><Text>Box 5</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 4,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 50,
    margin: 4,
    backgroundColor: '#3884FF',
  }
});
