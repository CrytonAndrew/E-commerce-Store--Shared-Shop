import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap" // A container to move the elements away from the coners
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from "./Screens/ProfileScreen"
import ShippingScreen from "./Screens/ShippingScreen"
import PaymentScreen from "./Screens/PaymentScreen"
import PlaceorderScreen from "./Screens/PlaceorderScreen"
import OrderScreen from "./Screens/OrderScreen"
import UserListScreen from "./Screens/UserListScreen"
import UserEditScreen from "./Screens/UserEditScreen"
import ProductListScreen from "./Screens/ProductListScreen"
import ProductEditScreen from "./Screens/ProductEditScreen"
import OrderListScreen from "./Screens/OrderListScreen"

function App() {
  return (
    <> 
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/login" component={LoginScreen}/>
        <Route path="/register" component={RegisterScreen}/>
        <Route path="/profile" component={ProfileScreen}/>
        <Route path="/shipping" component={ShippingScreen}/>
        <Route path="/payment" component={PaymentScreen}/>
        <Route path="/placeorder" component={PlaceorderScreen}/>
        <Route path="/order/:id" component={OrderScreen}/>
         <Route path="/product/:id" component={ProductScreen}/>
         <Route path="/cart/:id?" component={CartScreen}/> {/*The id is optional*/}
         <Route path="/admin/productlist" component={ProductListScreen}/>
         <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
         <Route path="/admin/orderlist" component={OrderListScreen} />
         <Route path="/admin/userlist" component={UserListScreen} />
         <Route path="/admin/user/:id/edit" component={UserEditScreen}/>
         <Route path="/" component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
