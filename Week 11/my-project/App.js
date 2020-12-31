import React from 'react';

import Navigator from './routes/homeStack';

/** 
 * As you will need to run expo expo-camera on a Android Device no an
 * emulator you will need to connect your phone via USD and use the command 
 * “expo start --localhost --android”
 * 
 * On Android 4.1 and lower, the Developer options screen is available by default. On Android 4.2 and higher, do the following:
 * Open the Settings app.
 * Scroll to the bottom and select About phone.
 * Scroll to the bottom and tap Build number 7 times.
 * Return to the previous screen to find Developer options near the bottom.
 * Scroll down and enable USB debugging.
*/


export default function App() {
  return (
    <Navigator />
  );
}

