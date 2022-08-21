import { useReducer } from "react";
import CartContext from "./cart_context";
import CartReducer from './cart_reducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from '../types'

const CartState = ({ children }) => {

    const initialState = {
        showCart: false,
        cartItem: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }
    const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART })
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: id })
    }
    return (
        <CartContext.Provider value={{
            showCart: state.showCart, cartItem: state.cartItem, addToCart, showHideCart, removeItem
        }}></CartContext.Provider>
    )
}

export default CartState;