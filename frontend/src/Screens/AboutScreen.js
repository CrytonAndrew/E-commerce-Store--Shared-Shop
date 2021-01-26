import React from 'react'
import { Card, Row, Col } from "react-bootstrap"

const AboutScreen = () => {
    return (
        <>
           <h2>About Us</h2> 
           <Row>
               <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
               </Col>
           </Row>
        </>
    )
}

export default AboutScreen
