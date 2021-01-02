import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addByAmount } from '../redux/cartSlice';
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
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title={`${cartItems[ids]}`}
                                    id={`input-group-dropdown-${ids}`}
                                >
                                    {
                                        [1, 2, 3, 4].map((num) => (
                                            <Dropdown.Item 
                                                onClick={() => dispatch(addByAmount({id: ids, amount: num}))}
                                            >
                                                {num}
                                            </Dropdown.Item>

                                        ))
                                    }
                                </DropdownButton>

                                <FormControl disabled aria-describedby={`basic-addon${ids}`}  placeholder={fruit.name} />

                                <InputGroup.Append>
                                    <Button onClick={() => dispatch(removeFromCart(ids))} variant="danger">remove</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </>
                ))
            }
        </>
    </Row>
  );
}
