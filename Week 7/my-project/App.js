import React from 'react';

import Navigator from './routes/homeStack';

/** 
 * As you will need to run expo expo-camera on a Android Device no an
 * emulator you will need to connect your phone via USD and use the command 
 * “expo start --localhost --android”
*/


export default function App() {
  return (
    <Navigator />
  );
}

