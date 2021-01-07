import axios from 'axios' // Adding an item, we should make a request to /api/product/:id to get the data for that particular product
import {CART_ADD_ITEM,  CART_REMOVE_ITEM} from "../constants/cartConstants"

//The cart is gonna be saved to local storage 
//getState -> returns entier state tree, so that incudes any thing that in our combine reducers contains for its states
//But for us getState is gonna give us the cart 
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    //This what we are going to display in our cart
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    //Save it in our local storage
    //We are saving the entire cart, which is where we use getState()
    //For it to fill the state we do it in our store 
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}