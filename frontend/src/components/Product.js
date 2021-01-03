import React from 'react'
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom" // This makes the screen not refresh as this is a single page application and replaces "<a></a>" tags 
import Rating from "./Rating"


const Product = (props) => {
    return (
        <>
        <Card clasName="my-3 p-3 rounded" style={{ width: '17rem'}}>
            <Link to={`/product/${props.product._id}`}><Card.Img variant="top" src={props.product.image} /></Link>
        <Card.Body>
            <Link to={`/product/${props.product._id}`}><Card.Title>{props.product.name}</Card.Title></Link>
            <Card.Text>
               <Rating 
                    color='gold'
                    value={props.product.rating} 
                    text={`${props.product.numReviews} reviews`}
                    />
            </Card.Text>
            <Card.Text as="h3" >${props.product.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button> 
        </Card.Body>
        </Card>
        </>
    )
}

export default Product
