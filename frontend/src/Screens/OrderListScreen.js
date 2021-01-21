import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Table, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import {listOrders} from "../actions/orderActions"

const OrderListScreen = ({history}) => {
    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const {orders, error, loading} = orderList

    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo.isAdmin) {
            history.push("/login")
        }
        else {
            dispatch(listOrders())
        }

    }, [dispatch, history, userInfo]) // Pass in successDelete -> so when the value changes the screen reloads

    

    return (
        <>
        <Row className="align-items-center">
            <Col>
                <h1>
                    Orders
                </h1>
            </Col>
        </Row>
            {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
                <Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                        <th>Order ID:</th>
                        <th>USER ID</th>
                        <th>TAX PRICE</th>
                        <th>SHIPPING PRICE</th>
                        <th>TOTAL PRICE</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <th>{order.user}</th>
                            <th>{order.taxPrice}</th>
                            <th>{order.shippingPrice}</th>
                            <th>{order.totalPrice}</th>
                            <th>{order.isPaid ? <i class="far fa-check-circle" style={{color: "green"}}></i> : <i class="fas fa-times-circle" style={{color: "red"}}></i>}</th>
                            <th>{order.isDelivered ? <i class="far fa-check-circle" style={{color: "green"}}></i> : <i class="fas fa-times-circle" style={{color: "red"}}></i>}</th>
                            <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                    <Button variant="light" className="btn-sm">
                                        <i class="fas fa-angle-right"></i>
                                    </Button>
                                </LinkContainer>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            )}
        </>
    )
}

export default OrderListScreen
