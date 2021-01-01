import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BookShop from '../screens/BookShop';
import Cart from '../screens/Cart';

const screens = {
    BookShop: {
        screen: BookShop
    },
    Cart: {
        screen: Cart
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);