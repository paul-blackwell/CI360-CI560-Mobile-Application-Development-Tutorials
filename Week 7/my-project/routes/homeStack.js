import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import ScreenTwo from '../screens/ScreenTwo';

const screens = {
    Home: {
        screen: Home
    },
    ScreenTwo: {
        screen: ScreenTwo
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);