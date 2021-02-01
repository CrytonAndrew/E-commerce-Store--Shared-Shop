import React from 'react'
import {useSelector} from "react-redux"
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

const Footer = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
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
                        {userInfo ? (
                            <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/cart">My Cart</Link></li>
                            <li><Link to="/profile">My Orders</Link></li>
                        </ul>
                        ) : (
                            <ul>
                            <li><Link to="/login">Profile</Link></li>
                            <li><Link to="/login">My Cart</Link></li>
                            <li><Link to="/login">My Orders</Link></li>
                        </ul>
                        )}
                    </div>  
                    </Col>
                    <Col >
                    <h4 className="footer-titles">Need Help?</h4>
                    <div className="lists">
                        <ul>
                            <li>
                                <Link to="/contact/help">Help</Link>
                            </li>
                            <li>
                                <Link to="/contact">Get In Touch</Link>
                            </li>
                            <li>
                                <Link to="/contact">Product Requests</Link>
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
