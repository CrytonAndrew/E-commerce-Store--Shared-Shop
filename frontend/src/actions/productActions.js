import axios from "axios"
import {
     PRODUCT_LIST_FAIL,
     PRODUCT_LIST_SUCCESS, 
     PRODUCT_LIST_REQUEST, 
     PRODUCT_DETAILS_FAIL, 
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DELETE_REQUEST,
     PRODUCT_DELETE_SUCCESS,
     PRODUCT_DELETE_FAIL,
     PRODUCT_CREATE_REQUEST,
     PRODUCT_CREATE_SUCCESS,
     PRODUCT_CREATE_FAIL,
     PRODUCT_UPDATE_REQUEST,
     PRODUCT_UPDATE_FAIL,
     PRODUCT_UPDATE_SUCCESS,
     PRODUCT_CREATE_REVIEW_REQUEST,
     PRODUCT_CREATE_REVIEW_SUCCESS,
     PRODUCT_CREATE_REVIEW_FAIL,
     PRODUCT_TOP_REQUEST,
     PRODUCT_TOP_SUCCESS,
     PRODUCT_TOP_FAIL,
    } from "../constants/productConstants"


// Actions for our reducers
// This action does what the 'useEffect' does in the homeScreen Component
// Which is it uses axios to fetch data from our api link and then uses state 'useState'
// to setProducts with the data that was returned from the api 
// 
// Here the actions then dispacthes the action to the reducer
// The function below is an Action creator:
// {PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST} -> These are the actions created 

export const listProducts = (keyword = "", pageNumber = "") => async (dispatch) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`) // Fetching the data

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


export const deleteProduct = (id) => async (dispatch, getState) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_DELETE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.delete(`/api/products/${id}`, config) // Fetching the data

        dispatch({
            type: PRODUCT_DELETE_SUCCESS, //Data recieved -> Calls reducer filling in the payload 
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}


export const createProduct = () => async (dispatch, getState) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_CREATE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(`/api/products`, {} , config) 

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_UPDATE_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/products/${product._id}`, product , config) 

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}


export const createProductReview = (productId, review) => async (dispatch, getState) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        // Dispatch the request -> Calls in the reducer -> Sets loading to true
        dispatch({type: PRODUCT_CREATE_REVIEW_REQUEST})

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        // Returns a message -> But we dont need it
        await axios.post(`/api/products/${productId}/reviews`, review , config) 

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}

export const listTopProducts = () => async (dispatch) => { // Thunk allows us to create asynchronous function (functions within functions)
    try {
        
        dispatch({type: PRODUCT_TOP_REQUEST})
 
        
        // Returns a message -> But we dont need it
        const { data } =  await axios.get(`/api/products/top`) 

        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message //Getting our backend error in our frontend state
        })
    }
}






