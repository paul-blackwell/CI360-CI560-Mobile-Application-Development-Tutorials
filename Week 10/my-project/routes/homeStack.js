
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import BookShop from '../screens/BookShop';
import Cart from '../screens/Cart';



/**
 * Note: Custom Header Left Navigation docs if needed
 * https://github.com/react-navigation/react-navigation/issues/1570
 */

const HomeStack = createStackNavigator({
    BookShop: {
        screen: BookShop,
        navigationOptions: ({ navigation }) => ({
            headerRight: () => (
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Ionicons name="ios-cart" size={25} color="#000000" />
                </TouchableOpacity>
            )
        }),
    },
    Cart: {
        screen: Cart
    }
});


const styles = StyleSheet.create({
    cartButton: {
        marginRight: 8
    }
});

export default createAppContainer(HomeStack);