import React, { useState, useEffect } from 'react';
import foods from '../database/foods.json';

import { Row, Col } from 'react-bootstrap'

export default function Item({ids, cartItems}) {
    // for each food, check if id == foods[id]
    // if the id matches matches, display the name and price. 
    const [foodObj, setFoodObj] = useState([])

    useEffect(() => {
        setFoodObj(foods.filter((fruit) => fruit.id == ids))
        
    }, [cartItems])

    console.log(ids)

  return (
    <Row key={ids}>
        <Col>
            {
                foodObj.map((fruit) => (
                    <>
                        <h5>{fruit.name}</h5>
                        <p>{`Count: ${cartItems[ids]}`}</p>
                    </>
                ))
            }
        </Col>
        {/* <Col>{ids}: {cartItems[ids]}</Col> */}
    </Row>
  );
}
