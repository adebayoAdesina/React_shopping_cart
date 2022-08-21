import ProductCard from "../components/product_card";
import products from "../data";
import './home_screen.css'
const HomeScreen = () => {
    return (
        <div className="products_wrapper">
            {products.map((e) => (<ProductCard product={e} key={e._id}/>),)}
        </div>
    )

}

export default HomeScreen;

