import './navbar.css'
import CartContext from '../context/cart/cart_context';
import { useContext } from 'react';

const NavBar = () => {

    const { cartItem, showHideCart } = useContext(CartContext);

    return (
        <nav>
            <div className="nav_left">Store</div>
            <div className="nav_middle">
                <div className="input_wrapper">
                    <input type="text" />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className="nav_right">
                <div className="cart_icon">
                    <i className='fa fa-shopping-cart' aria-hidden="true" onClick={showHideCart}/>
                    {cartItem.length > 0 && <div className='item_count'><span>{cartItem.length}</span></div>}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;