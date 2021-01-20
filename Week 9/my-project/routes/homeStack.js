import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Meals from '../screens/Meals';

const screens = {
    Home: {
        screen: Home
    },
    Meals: {
        screen: Meals
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);