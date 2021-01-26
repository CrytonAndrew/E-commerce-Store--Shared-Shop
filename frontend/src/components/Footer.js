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
                            <Link><li className="footer-social-item"><i class="fab fa-twitter-square"></i></li></Link>
                            <Link><li className="footer-social-item"><i class="fab fa-facebook-square"></i></li></Link>
                            <Link><li className="footer-social-item"><i class="fab fa-youtube-square"></i></li></Link>
                            <Link><li className="footer-social-item"><i class="fab fa-instagram-square"></i></li></Link>
                        </ul>
                    </Col>
                    <Col >
                    <h4 className="footer-titles">Account Info</h4>
                    <div className="lists">
                        <ul>
                            <li><Link>Profile</Link></li>
                            <li><Link>My Cart</Link></li>
                            <li><Link>My Orders</Link></li>
                        </ul>
                    </div>  
                    </Col>
                    <Col >
                    <h4 className="footer-titles">Need Help?</h4>
                    <div className="lists">
                        <ul>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li>
                                <Link to="/contact">Get In Touch</Link>
                            </li>
                            <li>
                                <Link>Product Requests</Link>
                            </li>
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
                            <li>
                                <Link to="/about/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/terms&conditions">Terms & Conditions</Link>
                            </li>
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
