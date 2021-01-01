import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../redux/cartSlice';

export default function Cart() {
    // const dispatch = useDispatch()
    const cart = useSelector(selectCart)

    const [items, setItems] = useState({})

    useEffect(() => {
        setItems(cart)
    }, [cart])

    const displayItems = (cartItems) => {
        if(Object.keys(cartItems).length !== 0){
            const all = [] 
            for(const ids in cartItems){
                all.push(<h1>{ids}: {cartItems[ids]}</h1>)
            }
            return all;
        }  
    } 

    // console.log(items)

    return (
        <>
            {
                displayItems(items)
            }
        </>
    );
}
