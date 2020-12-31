import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, addToCart } from '../redux/cartSlice';

import foods from '../database/foods.json'

import '../scss/Products.scss'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


export default function Products(){
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)

    console.log(cart)
    return(
        <main>
            {
                foods.map((fruit, index) => (
                    <Card key={index}>
                        <Card.Img variant="top" src={fruit.image} />
                        <Card.Body>
                            <Card.Title>{fruit.name}</Card.Title>
                            <Card.Text>
                                {fruit.price}
                            </Card.Text>
                            <Button 
                                block
                                variant="success" 
                                size="lg" 
                                onClick={(e) => dispatch(addToCart(fruit))}
                            >
                                <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </main>
    )
}