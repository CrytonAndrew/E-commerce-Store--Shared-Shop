import React, {useEffect} from 'react'
import {Col, Row, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const ContactScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
        <div className="contact-us-main">
            <h1 className="get-in-touch-heading">Get In Touch</h1>
            <div>
                <p>Contact us for more inforamtion <br/>or fill in the form below and we will get back to you</p>
            </div>
        </div>

        <div className="contact-us-form">        
        <Row>
            <Col>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>How can we help you?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>


                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Confirm all the above information is correct" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>

            <Col>
                <h3>Contact Info</h3>
                    <div className="contact-us-list">
                    <Link><i className="fas fa-map-marker-alt contact-us-item" >  101 Main St, Gauteng</i></Link>
                    <br></br>
                    <Link><i className="fas fa-phone-alt contact-us-item">  +27 123 123 1234</i></Link>
                    <br></br>
                    <Link><i className="fas fa-envelope contact-us-item">  @info@email.com</i></Link> 
                    </div>
            </Col>
        </Row>  
        </div>      
        </>
    )
}

export default ContactScreen
