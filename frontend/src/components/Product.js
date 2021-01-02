import React from 'react'
import {Card, Button} from "react-bootstrap";


const Product = (props) => {
    return (
        <>
        <Card clasName="my-3 p-3 rounded" style={{ width: '18rem' }}>
            <a href={`/product/${props.product._id}`}><Card.Img variant="top" src={props.product.image} /></a>
        <Card.Body>
            <a href={`/product/${props.product._id}`}><Card.Title>{props.product.name}</Card.Title></a>
            <Card.Text>
                <div>
                 {props.product.rating} from {props.product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text as="h3" >${props.product.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button> 
        </Card.Body>
        </Card>
        </>
    )
}

export default Product
