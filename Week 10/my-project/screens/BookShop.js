import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function BookShop({ navigation }) {
  

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.buttonContainer}>
          <Button
            title="Next Screen"
            onPress={() => {
              navigation.navigate('Cart')
            }}
            color="#ff5c5c"
          />
        </View>
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