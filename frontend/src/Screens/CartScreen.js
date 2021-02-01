// useEffect is when we wanna dispatch addToCart
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

//Used for dealing with our redux state -> This is needed any time for dealing with redux in any component
// to Get those items from our local storage we use useSelector
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem} from 'react-bootstrap'
import Message from "../components/Message"
import {addToCart, removeFromCart} from "../actions/cartActions"

//Get product id in match.params.id, location (qty), history for redirecting
const CartScreen = ({match, location, history}) => {
    const productId = match.params.id

    // returns ?qty value in route
    //  Tarnery operator returns a number that is after the equal sign else set the quantity to one 
    const qty  = location.search ?  Number(location.search.split("=")[1]) : 1
    
    const dispatch = useDispatch()

    //Getting the items added in the cart 
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        window.scrollTo(0, 0)
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]) 


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }


    const checkoutHandler = () => {
        history.push("/login?redirect=shipping")
    }

    return (
        <Row>
            <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <Message>Your cart is empty <Link to="/">Go Back</Link></Message> : (
                <ListGroup variant="flush">
                {cartItems.map(item => (
                    <ListGroup.Item key={item.product}>
                    <Row>
                        <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={2}>
                            <Form.Control as="select" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                            </Form.Control>
                        </Col>
                        <Col md={2}>
                        <Button type="button" variant="light" onClick={() => {
                            removeFromCartHandler(item.product)
                        }}>
                            <i className="fas fa-trash"></i>
                        </Button>           
                        </Col>
                    </Row>
                    </ListGroup.Item>
                ))}
                </ListGroup>
            )}
            </Col>
            <Col md={4}>
            <Card>
            <ListGroup variant="flush">
            <ListGroupItem>
                <h2>Subtotal ({cartItems.reduce((accumulator, item) => accumulator + item.qty, 0)}) Items</h2>
                ${cartItems.reduce((accumulator, item) => accumulator + item.qty * item.price, 0).toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
                <Button type="button" className="btn-block" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                Proceed To CheckOut
                </Button>
            </ListGroupItem>
            </ListGroup>
            </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
