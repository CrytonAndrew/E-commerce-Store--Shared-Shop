import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
// import products from '../products'  // Changing to our back-end
import Product from "../components/Product"
import axios from "axios"


const HomeScreen = () => {
    const [products, setProducts] = useState([])

    // This function is used to make requests to our back-end 
    // Within it we can use axios to make requests 
    useEffect(() => {
       const fetchProducts = async () => {
           const { data } = await axios.get("/api/products")

           setProducts(data)
       } 
       fetchProducts()
    }, [])

    return (
        <>
           <h1>Latest products</h1> 
           <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
