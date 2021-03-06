import {
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_SUCCESS,
     PRODUCT_LIST_REQUEST, 
     PRODUCT_DETAILS_FAIL,
      PRODUCT_DETAILS_SUCCESS,
       PRODUCT_DETAILS_REQUEST,
       PRODUCT_DELETE_REQUEST,
       PRODUCT_DELETE_SUCCESS,
       PRODUCT_DELETE_FAIL,
       PRODUCT_CREATE_REQUEST,
       PRODUCT_CREATE_SUCCESS,
       PRODUCT_CREATE_FAIL,
       PRODUCT_CREATE_RESET,
       PRODUCT_UPDATE_REQUEST,
       PRODUCT_UPDATE_SUCCESS,
       PRODUCT_UPDATE_FAIL,
       PRODUCT_UPDATE_RESET,
       PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL
    } from '../constants/productConstants'

//Handles state for the product list that we see on the Home Screen
//Parameters have the initial state(products with an empty array) and an action reducer 
export const productListReducer = (state = {products: []}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_LIST_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {
                loading: false, 
                products: action.payload.products, 
                pages: action.payload.pages,
                page: action.payload.page
            }
        case PRODUCT_LIST_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}

export const productDetailsReducer = (state = {product: {reviews: []}}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true, ...state}
        case PRODUCT_DETAILS_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}

export const productDeleteReducer = (state = {}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case PRODUCT_DELETE_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, success: true}
        case PRODUCT_DELETE_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}


export const productCreateReducer = (state = {}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case PRODUCT_CREATE_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, success: true, product: action.payload}
        case PRODUCT_CREATE_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    } 
}

export const productUpdateReducer = (state = {product: {}}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case PRODUCT_UPDATE_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, success: true, product: action.payload}
        case PRODUCT_UPDATE_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case PRODUCT_UPDATE_RESET:
            return {
                product: {}
            }
        default:
            return state
    } 
}

export const productReviewCreateReducer = (state = {}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case PRODUCT_CREATE_REVIEW_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, success: true}
        case PRODUCT_CREATE_REVIEW_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    } 
}

export const productTopRatedReducer = (state = { products: []}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case PRODUCT_TOP_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true, products: []}
        case PRODUCT_TOP_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, products: action.payload}
        case PRODUCT_TOP_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}