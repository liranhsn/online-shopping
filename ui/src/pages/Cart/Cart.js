import React, { useContext } from 'react';
import { Button } from '@mui/material';

import CartItem from '../../components/CartItem/CartItem';
import { CartContext } from '../../context/CartContext';

import './Cart.scss';

function Cart() {
    const cartContext = useContext(CartContext);
    let totalPrice = 0;

    const cartItemElements = cartContext.cartContent?.map(item => {
        totalPrice = totalPrice + item.price;
        return (
            <CartItem
                key={`${item.itemId}${item.size}`}
                id={item.itemId}
                price={item.price}
                size={item.size}
                title={item.title}
                image={item.image}
            ></CartItem>
        );
    });

    return (
        <>
            {cartItemElements?.length > 0 ? (
                <div className="cart">
                    <h2 className="cart--header">סל קניות</h2>
                    {cartItemElements}
                    <br />
                    <div></div>
                    <div className="cart--total">
                        <h3 className="cart--total--title">{`סה"כ`}</h3>
                        <h3>₪{totalPrice}</h3>
                    </div>
                    <Button
                        type="button"
                        variant="contained"
                        className="cart-button"
                    >
                        מעבר לקופה ותשלום
                    </Button>
                </div>
            ) : (
                <h3 className="cart--nodata">הוסף פריטים לסל הקניות</h3>
            )}
        </>
    );
}

export default Cart;
