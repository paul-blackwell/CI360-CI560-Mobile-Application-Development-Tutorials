import React, { useState } from 'react';
import { ToastAndroid, AlertIOS, StyleSheet, Text, View, Button, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';



export default function Home({ navigation }) {
 

 

  const showToast = (message) => {
    // We need to check if the app if on android
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(message);
    }
  }

  // import Toast from 'react-native-simple-toast';

  // const showToast = (message) => {
  //   Toast.show(message);
  // }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Show toast"
            onPress={() => {
              showToast('Hello, I am a toast')
            }} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff'
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
