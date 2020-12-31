import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeFromCart } from '../redux/cartSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Accordion, Card, Button } from 'react-bootstrap'
import '../scss/Nav.scss'

export default function Nav () {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)


    return (
        <nav>
            <Accordion>
                <Card>
                    <Card.Header>
                        <span>Zero</span>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {
                                // cart.map((fruit) => (
                                //     <h1>{fruit}</h1>
                                // ))
                                console.log(cart)
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </nav>
    );
}
