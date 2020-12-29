import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './src/header';


export default function App() {

  // Initialize showHelloWorld state and set initial state to false
  const [showHelloWorld, setHelloWorld] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          {/* Change showHelloWorld to true if button is clicked */}
          <Button
            style={styles.button}
            title="Click me!"
            onPress={() => {
              setHelloWorld(true)
            }} />
        </View>
        {/* Output 'Hello world' if showHelloWorld state is true */}
        <Text style={styles.text}>{showHelloWorld ? 'Hello world' : ''}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%'
  },
  text: {
    paddingVertical: 20,
    fontSize: 20,
  }
});
