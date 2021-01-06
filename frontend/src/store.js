// Connects all of our reducers, middleware

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // We use middleware to apply thunk
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer 
}) 

const initialState = {} // If we want anything to be loaded when the store loads

const middleware = [thunk]

const store  = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store