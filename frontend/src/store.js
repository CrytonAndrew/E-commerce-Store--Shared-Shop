// Connects all of our reducers, middleware

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // We use middleware to apply thunk
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import {cartReducer} from "./reducers/cartReducers"
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from "./reducers/userReducers.js"

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
}) 
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {cart: {cartItems: cartItemsFromStorage, userLogin: {userInfo: userInfoFromStorage}}} // If we want anything to be loaded when the store loads

const middleware = [thunk]

const store  = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store