import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from '../types';

const CartReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HIDE_CART:
            return {
                ...state,
                showCart: !state.showCart
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItem: [...state.cartItem, action.payload]
            }
        case Remove_Item:
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.id !== action.payload)
            }
        default:
            break;
    }
}

export default CartReducer;