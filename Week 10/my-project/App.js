import React from 'react';
import Navigator from './routes/homeStack';
import { CartProvider } from './context/cart.context'



export default function App() {
  return (
    <CartProvider>
      {/* Everything we want to have access to the CartProvider will have to be a child of it ie the  Navigator*/}
      <Navigator />
    </CartProvider>
  );
}

