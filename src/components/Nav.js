import React from 'react';
import Cart from "./Cart"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Accordion, Card, Button } from 'react-bootstrap'
import '../scss/Nav.scss'

export default function Nav () {
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
                            <Cart />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </nav>
    );
}
