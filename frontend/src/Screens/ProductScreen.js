import React, { useEffect} from 'react'
import {Link} from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, ButtonGroup} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Rating from "../components/Rating"
import {listProductDetails} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

// "match" is used to access the param property that stores the id from the link of product chosen
const ProductScreen = (props) => {
    const dispatch = useDispatch() //Dispatch the action that we just created 

    const productDetails = useSelector(state => state.productDetails) // Getting the product from state 
    const {loading, error, product} = productDetails
    useEffect(() => {
      dispatch(listProductDetails(props.match.params.id))

    },[dispatch, props.match])


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
                        <ListGroupItem>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}><i className="fas fa-cart-plus">Add to Cart</i></Button>
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
