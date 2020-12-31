import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CameraScreen from '../screens/CameraScreen';

const screens = {
    Home: {
        screen: Home
    },
    Camera: {
        screen:CameraScreen
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);