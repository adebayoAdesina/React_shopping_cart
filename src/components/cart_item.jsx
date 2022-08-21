import { useContext } from 'react'
import './cart_item.css'
import CartContext from '../context/cart/cart_context'

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <li className="cartItem_items">

            <img src={item.image} alt="" />
            <div>{item.name}</div>
            <div>${item.price}</div>
            <button className="cartItem_button" onClick={()=> removeItem(item._id)}>Remove</button>
        </li>
    );
}

export default CartItem;