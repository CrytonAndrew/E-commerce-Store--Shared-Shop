import React, { useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Rating from "../components/Rating"
import {listProductDetails, createProductReview} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import {PRODUCT_CREATE_REVIEW_RESET} from "../constants/productConstants"

 
// "match" is used to access the param property that stores the id from the link of product chosen
const ProductScreen = (props) => {
    const [quantity, setQuantity] = useState(1)

    // Review form
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const dispatch = useDispatch() //Dispatch the action that we just created 

    const productDetails = useSelector(state => state.productDetails) // Getting the product from state 
    const {loading, error, product} = productDetails

    const userLogin = useSelector(state => state.userLogin) // Getting the product from state 
    const {userInfo} = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate) // Getting the product from state 
    const {success: successProductReview, error: errorProductReview} = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            alert("Review Submitted")
            setRating(0)
            setComment('')
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
      dispatch(listProductDetails(props.match.params.id))

    },[dispatch, props.match, successProductReview])

    //We use history to push -> Later destructure
    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${quantity}`) //This re-routes to the cart screen
    }

    const submitHandler = (e) => {
        e.preventDefault() // Since we are submitting a form
        dispatch(createProductReview(props.match.params.id, {
            rating, 
            comment
        }))
    }

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : ( <>
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
            </Row>
            <Row>
                <Col md={6}>
                <h2> Reviews: </h2>
                {product.reviews.length === 0 && <Message variant="secondary">No Reviews</Message>}
                <ListGroup variant="flush">
                        {product.reviews.map(review => (
                            <ListGroup.Item>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} />
                                <p>{review.createdAt.substring(0, 10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <h2>Write a customer review</h2>
                            {errorProductReview && <Message variant="danger">{errorProductReview}</Message>}
                            {userInfo 
                                ? (<Form onSubmit={submitHandler}>
                                    <Form.Group controlId='rating'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                                            <option value=''>Select...</option>
                                            <option vlaue='1'>1 - Very Poor</option>
                                            <option value='2'>2 - Poor</option>
                                            <option value='3'>3 - Fair</option>
                                            <option value='4'>4 - Good</option>
                                            <option value='5'>5 - Excellent</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='comment'>
                                    <Form.Label>
                                        Comment:
                                    </Form.Label>
                                    <Form.Control as='textarea' row='3' onChange={(e) => setComment(e.target.value)}>

                                    </Form.Control>
                                    </Form.Group>
                                    <Button type="submit" variant="primary">
                                        Submit Review
                                    </Button>
                                </Form>) 
                                : <Message><Link to="/login">Sign in</Link> to write a review for this </Message>
                                }
                        </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
            </>
            )
            }
            
        </>
    )
}

export default ProductScreen
