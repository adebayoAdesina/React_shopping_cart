import './product_card.css'
import Rating from './rating';

function ProductCard({ product }) {
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
                <button className="productCard_button">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;