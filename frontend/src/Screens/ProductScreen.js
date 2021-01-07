import React, { useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Rating from "../components/Rating"
import {listProductDetails} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

// "match" is used to access the param property that stores the id from the link of product chosen
const ProductScreen = (props) => {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch() //Dispatch the action that we just created 

    const productDetails = useSelector(state => state.productDetails) // Getting the product from state 
    const {loading, error, product} = productDetails
    useEffect(() => {
      dispatch(listProductDetails(props.match.params.id))

    },[dispatch, props.match])

    //We use history to push -> Later destructure
    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`) //This re-routes to the cart screen
    }

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <Row>
                <Col md={6} >
                   <Image src={product.image} alt={product.image} fluid/> 
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status: </Col>
                                <Col>
                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        {
                            product.countInStock > 0 && <ListGroupItem >
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map(x => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        }
                        <ListGroupItem>
                            <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock === 0}><i className="fas fa-cart-plus">Add to Cart</i></Button>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block btn-secondary" type="button"><i className="fas fa-heart">Add to WishList</i></Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                </Col>
            </Row>)}
            
        </>
    )
}

export default ProductScreen
