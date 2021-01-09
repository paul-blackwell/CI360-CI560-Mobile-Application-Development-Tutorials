import React, {useReducer, createContext } from 'react';
import cartReducer from '../reducers/cart.reducer';

export const CartContext = createContext();

const cardData = [ { id: 1, title: 'Book 1', author: 'Roxy Traynor', price: 2.00, uri: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg' },];

export const CartProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, cardData);
    
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
}