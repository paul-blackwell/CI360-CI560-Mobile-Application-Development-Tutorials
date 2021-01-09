import React from 'react';
import Navigator from './routes/homeStack';
import { CartProvider } from './context/cart.context'



export default function App() {
  return (
    <CartProvider>
      <Navigator />
    </CartProvider>
  );
}

