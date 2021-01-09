import React, {useReducer, createContext } from 'react';
import cartReducer from '../reducers/cart.reducer';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
}