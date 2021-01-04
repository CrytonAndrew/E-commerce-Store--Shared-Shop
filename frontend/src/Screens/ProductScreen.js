import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, ButtonGroup} from "react-bootstrap"
import Rating from "../components/Rating"
// import products from "../products";
import axios from 'axios';

// "match" is used to access the param property that stores the id from the link of product chosen
const ProductScreen = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fectProduct = async () => {
            const {data} = await axios.get(`/api/products/${props.match.params.id}`)
            
            setProduct(data)
        }
        fectProduct()
    },[props.match])

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
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
            </Row>
        </>
    )
}

export default ProductScreen
