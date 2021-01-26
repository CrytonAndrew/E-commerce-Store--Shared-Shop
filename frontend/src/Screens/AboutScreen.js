import React, {useEffect} from 'react'
import { Card, Row, Col } from "react-bootstrap"

const AboutScreen = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
           <h2>About Us</h2> 
           <Row>
            {/* About Monologue */}
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus et sollicitudin lacus. Aenean gravida eu tortor at tempus. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Etiam at pretium mi. Mauris vel tortor at diam commodo tincidunt. 
                    Sed eget lorem id magna volutpat lobortis.
                    Ut non dictum est. Duis pretium tortor id gravida efficitur.
                    </p>
                    <br></br>
                    <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus et sollicitudin lacus. Aenean gravida eu tortor at tempus.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Etiam at pretium mi. Mauris vel tortor at diam commodo tincidunt. 
                    Sed eget lorem id magna volutpat lobortis. Ut non dictum est. Duis pretium tortor id gravida efficitur.
                    </p>

                    <br></br>
                        <Card>
                            <Card.Img variant="top" src="/images/holder2.png" />
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

            {/* Articles  */}
               <Col>
                        <Card>
                            <Card.Img variant="top" src="/images/holder2.png" />
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
                        <h3>Our Values:</h3>
                        <ul className="our-values-list">
                            <li className="our-values-list-item"><i class="fas fa-users"></i></li>
                            <li className="our-values-list-item"><i class="fas fa-globe-africa"></i></li>
                            <li className="our-values-list-item"><i class="fas fa-mountain"></i></li>
                            <li className="our-values-list-item"><i class="fas fa-car"></i></li>
                         </ul>
                         <p>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vivamus et sollicitudin lacus. Aenean gravida eu tortor at tempus.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Etiam at pretium mi. Mauris vel tortor at diam commodo tincidunt. 
                            Sed eget lorem id magna volutpat lobortis. Ut non dictum est. Duis pretium tortor id gravida efficitur.
                         </p>
                        
                </Col>

               {/* Contact Form  */}
           </Row>
        </>
    )
}

export default AboutScreen
