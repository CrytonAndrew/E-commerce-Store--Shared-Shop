import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from "../components/Product"
import {useDispatch, useSelector} from 'react-redux'
import Message from "../components/Message"
import Loader from '../components/Loader'
import {listProducts} from '../actions/productActions'
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"


const HomeScreen = ({match}) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products, pages, page} = productList



    // This function is used to make requests to our back-end 
    // Within it we can use axios to make requests 
    useEffect(() => {
       dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
        <Meta description="The shop where you find the best products for the best price" title="Welcome | Home" keywords="Electronics, Techonolgy, Best Prices"/>
        {!keyword && <ProductCarousel />}
           <h1>Latest products</h1> 
           {loading  ? <Loader /> : error ? <Message variant="danger">{error}</Message> : 
           (
            <>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword :  ""}/>
            </>
            )}
        </>
    )
}

export default HomeScreen
