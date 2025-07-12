import { createContext } from 'react';

let cartContext = {
    cartContent: [],
    setCartContent: () => {},
};
export const CartContext = createContext(cartContext);
