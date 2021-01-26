import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <Container>
            <div className="main-footer">
                <Row>
                    <Col >
                        <h4>Shared Shop</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus et sollicitudin lacus. Aenean gravida eu tortor at tempus.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Etiam at pretium mi. 
                        </p>
                        <ul className="footer-socials">
                            <li className="footer-social-item"><i class="fab fa-twitter-square"></i></li>
                            <li className="footer-social-item"><i class="fab fa-facebook-square"></i></li>
                            <li className="footer-social-item"><i class="fab fa-youtube-square"></i></li>
                            <li className="footer-social-item"><i class="fab fa-instagram-square"></i></li>
                        </ul>
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
                    <h4 className="footer-titles">About Us</h4>
                    <div className="lists">
                        <ul>
                            <li>
                               <Link to="/about">About Us</Link> 
                            </li>
                            <li>Blog</li>
                            <li>Terms & Conditions</li>
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
