import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { listProductDetails } from '../actions/productActions.js'
import FormContainer from '../components/FormContainer.js'


const ProductEditScreen = ({match, history}) => {
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [image, setImage] = useState('')



    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    // const userUpdate= useSelector(state => state.userUpdate)
    // const {loading: loaidingUpdate, error: errorUpdate, success: successUpdate} = userUpdate

    // If the user is already logged in then don't show login screen
    useEffect(() => {
        if (!product.name || product._id !== productId) {
            dispatch(listProductDetails(productId))
        }
        else {
            setName(product.name)
            setPrice(product.price)
            setBrand(product.brand)
            setDescription(product.description)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setImage(product.image)
        }
    }, [dispatch, history, product, productId])
 
    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <Link to="/admin/productlist" className="btn btn-light my-3">
                Go Back
            </Link>
            <FormContainer>

            <h2>Edit Product</h2>
            {/* {loaidingUpdate && <Loader/>} 
            {errorUpdate && <Message variant="danger">{error}</Message>} */}
                {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                   
                    <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        type='name' 
                        placeholder="Enter product name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type='number' 
                        placeholder="Enter price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image'>
                    <Form.Label>Image: </Form.Label>
                        <Form.Check
                        type='text' 
                        label="Image url"
                        checked={image}
                        onChange={(e) => setImage(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>

                    <Form.Group controlId='brand'>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder="Enter brand" 
                        value={brand} 
                        onChange={(e) => setBrand(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='countInStock'>
                        <Form.Label>countInStock</Form.Label>
                        <Form.Control 
                        type='number' 
                        placeholder="Set CountInStock" 
                        value={countInStock} 
                        onChange={(e) => setCountInStock(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='category'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                        type='text' 
                        placeholder="Enter category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        type='number' 
                        placeholder="Enter description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary">Update</Button>
                </Form>
            )}
            </FormContainer>
        </>
    )
}

export default ProductEditScreen