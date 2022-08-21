import './product_card.css'
import Rating from './rating';
import CartContext from '../context/cart/cart_context';
import { useContext } from 'react'

function ProductCard({ product }) {
    const { addToCart } =  useContext(CartContext);
    return (
        <div className="productCard_wrapper">
            <div>
                <img src={product.image} alt="" className="productCard_img" />
                <h4>{product.name}</h4>
                <div className="productCard_price">
                    <h5>${product.price}</h5>
                </div>
                <div className="productCard_rating">
                    <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>
                </div>
                <button className="productCard_button" onClick={()=>addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;