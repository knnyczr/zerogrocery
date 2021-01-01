import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeFromCart } from '../redux/cartSlice';

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    console.log(cart)

    return (
        <>
            {/* {
                cart.length > 0  &&
                cart.map((fruit) => (

                ))
            } */}
        </>
    );
}
