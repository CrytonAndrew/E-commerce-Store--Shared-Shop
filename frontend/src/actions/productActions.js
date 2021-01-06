import axios from "axios"
import {PRODUCT_LIST_FAIL,
     PRODUCT_LIST_SUCCESS, 
     PRODUCT_LIST_REQUEST, 
     PRODUCT_DETAILS_FAIL, 
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS
    } from "../constants/productConstants"


// Actions for our reducers
// This action does what the 'useEffect' does in the homeScreen Component
// Which is it uses axios to fetch data from our api link and then uses state 'useState'
// to setProducts with the data that was returned from the api 
// 
// Here the actions then dispacthes the action to the reducer
// The function below is an Action creator:
// {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST} -> These are the actions created 

export const listProducts = () => async (dispatch) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('/api/products') // Fetching the data

        dispatch({
            type: PRODUCT_LIST_SUCCESS, //Data recieved -> Calls reducer filling in the payload 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/products/${id}`) // Fetching the data

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, //Data recieved -> Calls reducer filling in the payload 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}
