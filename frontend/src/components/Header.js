import React from 'react'
import { Route } from "react-router-dom"
import {Container, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
// To bring in anything from the state it useSelector
// To call an action its useDispatch
import {useDispatch, useSelector} from 'react-redux'

// Here for the links we use the same thing from React-router-bootstrap as it does the same thing as React-router-dom 
//Rather is allows us to wrap bootstrap components
import {LinkContainer} from "react-router-bootstrap";

import {logout} from '../actions/userActions.js'

import SearchBox from "./SearchBox"


//React arrow function component 
const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler= () => {
        dispatch(logout())
    }

    return (
        <header>
        <Navbar bg="primary"   expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
            <Navbar.Brand><img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_1280.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Shared Shop</Navbar.Brand>
        </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Route render = {({history}) => <SearchBox history={history}/>} /> 
            
            {/* Move the following links to the left */}
            {/* We use font awesome to style our icons */}
                <Nav className="ml-auto"> 
                <LinkContainer to="/cart">
                <Button variant="light"><i className="fas fa-shopping-cart"></i>Cart</Button>
                </LinkContainer>
                {userInfo ? (
                    <NavDropdown title ={ userInfo.name} id='userName'>
                    <LinkContainer to='/profile'>
                    <NavDropdown.Item>profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                        LogOut
                    </NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <LinkContainer to="/login">
                    <Button variant="info"><i className="fas fa-user"></i>Sign In</Button>
                    </LinkContainer>) 
                }
                {userInfo && userInfo.isAdmin && (
                    <NavDropdown title ='Admin' id='adminMenu'>
                    <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    </NavDropdown>
                )}
                </Nav>

            {/* The form to be implemented later */}
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}

            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    )
}

export default Header
