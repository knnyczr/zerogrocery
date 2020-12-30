import React from 'react';
import '../scss/Nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Accordion, Card, Button } from 'react-bootstrap'

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
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </nav>
  );
}
