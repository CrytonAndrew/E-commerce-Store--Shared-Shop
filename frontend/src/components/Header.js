import React from 'react'
import {Container, Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap'

//React arrow function component 
const Header = () => {
    return (
        <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/"><img
                alt=""
                src="https://cdn.pixabay.com/photo/2016/09/24/20/11/dab-1692452_1280.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Shared Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            {/* Move the following links to the left */}
            {/* We use font awesome to style our icons */}
                <Nav className="ml-auto"> 
                <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
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
