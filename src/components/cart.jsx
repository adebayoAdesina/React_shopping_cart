import CartContext from "../context/cart/cart_context";
import './cart.css';
import { useContext } from "react";
import CartItem from "./cart_item";

const Cart = () => {

    const { showCart, cartItem, showHideCart } = useContext(CartContext);
    return (
        <>
            {showCart && (
                <div className="cart_wrapper">
                    <div style={{ textAlign: 'right' }}>
                        <i style={{ cursor: 'pointer' }} className="fa fa-time-circle" aria-hidden='true' onClick={showHideCart} />
                    </div>
                    <div className="cart_innerWrapper">
                        {cartItem.length == 0 ? (<h4>Cart is Empty</h4>) : (<ul>
                            {cartItem.map((item) => (<CartItem key={item._id} item={item} />))}
                        </ul>)}
                    </div>
                    <div className="cart_cartTotal">
                        <div>
                            Cart Total :
                        </div>
                        <div style={{ marginLeft: 5 }}>${cartItem.reduce((amount, item) => item.price + amount, 0)}</div>
                    </div>
                </div>

            )}
        </>
    );
}

export default Cart;