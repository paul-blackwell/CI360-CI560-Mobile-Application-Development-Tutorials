import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({ navigation }) {
  const [showHelloWorld, setHelloWorld] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Click me!"
            onPress={() => {
              setHelloWorld(true)
            }} />
        </View>
        <View style={styles.buttonContainer}>
      
          {/**
            * This function in the onPress will change the screen using 
            * the navigation passed down in the props from the stack 
            * navigator 
          */}
          <Button
            title="Next Screen"
            onPress={() => {
              navigation.navigate('ScreenTwo')
            }}
            color="#ff5c5c"
          />
        </View>

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
    width: '100%',
    margin: 10,
  },
  text: {
    paddingVertical: 20,
    fontSize: 20,
  }
});
