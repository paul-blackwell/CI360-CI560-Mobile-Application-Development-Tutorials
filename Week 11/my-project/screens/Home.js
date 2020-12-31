import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Next Screen"
          onPress={() => {
            navigation.navigate('Camera')
          }}
          color="#ff5c5c"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    margin: 10,
  },
});
