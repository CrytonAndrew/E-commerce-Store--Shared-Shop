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
         <Route path="/product/:id" component={ProductScreen}/>
         <Route path="/cart/:id?" component={CartScreen}/> {/*The id is optional*/}
         <Route path="/" component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
