import React, { useState, useEffect } from 'react';
import Item from './Item'

import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cartSlice';

import { Container } from 'react-bootstrap'

export default function Cart() {
    // const dispatch = useDispatch()
    const cart = useSelector(selectCart)

    const [items, setItems] = useState({})

    useEffect(() => {
        setItems(cart)
    }, [cart])

    const displayItems = (cartItems) => {
        if(Object.keys(cartItems).length !== 0){
            const allItems = [] 
            for(const ids in cartItems){
                allItems.push(<Item key={ids} ids={ids} cartItems={cartItems} />)
            }
            return allItems;
        }  else {
            return "Nothing in your Cart 😅"
        }
    } 

    return (
        <Container>
            { displayItems(items) }
        </Container>
    );
}
