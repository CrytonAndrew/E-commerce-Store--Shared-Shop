import { 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_FAIL,
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_REQUEST, 
    USER_DETAILS_REQUEST, 
    USER_DETAILS_SUCCESS, 
    USER_DETAILS_FAIL, 
    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS, 
    USER_UPDATE_PROFILE_FAIL, 
    USER_DETAILS_RESET, 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case USER_LOGIN_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case USER_LOGIN_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    } 
}

export const userRegisterReducer = (state = {}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case USER_REGISTER_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case USER_REGISTER_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, userInfo: action.payload}
        case USER_REGISTER_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}


export const userDetailsReducer = (state = {user: {}}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case USER_DETAILS_REQUEST: // Currenlty (loading: true) fetching the data
            return {...state, loading: true}
        case USER_DETAILS_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, user: action.payload}
        case USER_DETAILS_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case USER_DETAILS_RESET:
            return {
                user: {}
            }
        default:
            return state
    } 
}

export const userUpdateProfileReducer = (state = { }, action) => {
    // Evaluate the action 
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST: // Currenlty (loading: true) fetching the data
            return {...state, loading: true}
        case USER_UPDATE_PROFILE_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false, success: true ,userInfo: action.payload}
        case USER_UPDATE_PROFILE_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        default:
            return state
    } 
}

export const userListReducer = (state = {users: []}, action) => {
    // Evaluate the action 
    switch (action.type) {
        case USER_LIST_REQUEST: // Currenlty (loading: true) fetching the data
            return {loading: true}
        case USER_LIST_SUCCESS: // Fetched the data successfully -> products contain the payload data
            return {loading: false ,users: action.payload}
        case USER_LIST_FAIL: // Failed to fetch data
            return {loading: false, error: action.payload}
        case USER_LIST_RESET:
            return { user: []}
        default:
            return state
    } 
}
