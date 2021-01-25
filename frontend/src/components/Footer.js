import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
            <div className="main-footer">
                <Row>
                    <Col >
                        <h4>Company Name</h4>
                        
                    </Col>
                    <Col >
                    <h4 className="footer-titles">Account Info</h4>
                    <div className="lists">
                        <ul>
                            <li>Profile</li>
                            <li>My Cart</li>
                            <li>My Orders</li>
                        </ul>
                    </div>  
                    </Col>
                    <Col >
                    <h4 className="footer-titles">Need Help?</h4>
                    <div className="lists">
                        <ul>
                            <li>Help</li>
                            <li>Contact Info</li>
                            <li>Product Requests</li>
                            <li>Our Warehouse</li>
                        </ul>
                    </div>  
                    </Col>
                    <Col>
                    <h4 className="footer-titles">Who is Shared Shop</h4>
                    <div className="lists">
                        <ul>
                            <li>Loren Ipsum</li>
                            <li>Loren Ipsum</li>
                            <li>Loren Ipsum</li>
                            <li>Loren Ipsum</li>
                            <li>Loren Ipsum</li>
                        </ul>
                    </div>   
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; Shared Shop
                    </Col>
                </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
