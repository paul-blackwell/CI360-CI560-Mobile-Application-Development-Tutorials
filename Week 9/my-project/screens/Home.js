import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
       <Button
            title="Next Screen"
            onPress={() => {
              navigation.navigate('Meals')
            }}
            color="#ff5c5c"
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
});
