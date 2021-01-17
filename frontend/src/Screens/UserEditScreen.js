import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { getUserDetails } from '../actions/userActions.js'
import FormContainer from '../components/FormContainer.js'

const UserEditScreen = ({match, history}) => {
    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails


    // If the user is already logged in then don't show login screen
    useEffect(() => {
       if (!user.name || user._id !== userId) {
           dispatch(getUserDetails(userId))
       }
       else {
           setName(user.name)
           setEmail(user.email)
           setIsAdmin(user.isAdmin)
       }
    }, [dispatch, user, userId])
 
    const submitHandler = (e) => {
        e.preventDefault()
        
    }
    return (
        <>
            <Link to="/admin/userlist" className="btn btn-light my-3">
                Go Back
            </Link>
            <FormContainer>
                {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                   
                    <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        type='name' 
                        placeholder="Enter Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type='email' 
                        placeholder="Enter Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='isadmin'>
                        <Form.Check
                        type='checkbox' 
                        label="Is Admin"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>

                    <Button type="submit" variant="primary">Update</Button>
                </Form>
            )}
            </FormContainer>
        </>
    )
}

export default UserEditScreen