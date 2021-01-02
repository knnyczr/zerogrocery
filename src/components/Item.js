import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import foods from '../database/foods.json';

import { Row, Col, Button, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap'

export default function Item({ids, cartItems}) {
    const dispatch = useDispatch()
    const [foodObj, setFoodObj] = useState([])

    useEffect(() => {
        setFoodObj(foods.filter((fruit) => fruit.id == ids))    
    }, [ids])

    // console.log(ids)

  return (
    <Row key={ids}>
        <>
            {
                foodObj.map((fruit) => (
                    <>
                        <Col>
                            {/* <DropdownButton
                                // as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={`${cartItems[ids]}`}
                                // id={`input-group-dropdown-${ids}`}
                                >
                                <Dropdown.Item href="#">1</Dropdown.Item>
                                <Dropdown.Item href="#">2</Dropdown.Item>
                                <Dropdown.Item href="#">3</Dropdown.Item>
                                <Dropdown.Item href="#">4</Dropdown.Item>
                            </DropdownButton> */}
                            
                            <InputGroup className="mb-3">
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={`${cartItems[ids]}`}
                                id={`input-group-dropdown-${ids}`}
                                >
                                <Dropdown.Item href="#">1</Dropdown.Item>
                                <Dropdown.Item href="#">2</Dropdown.Item>
                                <Dropdown.Item href="#">3</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">4</Dropdown.Item>
                                </DropdownButton>
                                <FormControl disabled aria-describedby={`basic-addon${ids}`}  placeholder={fruit.name} />
                            </InputGroup>


                        </Col>
                        {/* <Col xs={5} key={`${fruit.id} - ${fruit.name}`}>
                            {fruit.name}
                        </Col>
                        <Col>
                            <Button
                                variant="danger"
                                onClick={(e) => dispatch(removeFromCart(fruit.id))}
                             >
                             del
                             </Button>
                        </Col> */}
                    </>
                ))
            }
        </>
    </Row>
  );
}
