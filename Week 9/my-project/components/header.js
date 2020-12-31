import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const Header = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click me app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 10, // Or we can use percentages (height: '10%')
    alignItems: 'center',

    backgroundColor: '#E6E6E6'
  },

  text: {
    fontSize: 20,
    paddingTop: 32
  }
});

export default Header;