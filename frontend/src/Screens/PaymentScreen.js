//This is for payment methods
import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer.js'
import {savePaymentMethod} from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps.js"


const PaymentScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart


    if(!shippingAddress) {
        history.push("/shipping")
    }

    const [paymentMethod, setPaymentMethod] = useState("Paypal")
    

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push("/placeorder")
    }

    return (
        <FormContainer>
        <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Row>
            <Form onSubmit={submitHandler} >
            <Form.Group>
                <Form.Label as="legend"> Select Method</Form.Label>
                <Col>
                    <Form.Check 
                        type="radio" 
                        label='PayPal or Credit Card' 
                        id="PayPal"
                        name="paymentMethod"
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                    </Form.Check>
                </Col>
            </Form.Group>
            <Button type="submit" variant="primary">
                Continue
            </Button>
            </Form>
            </Row>
        </FormContainer>
    )
}
 
export default PaymentScreen

