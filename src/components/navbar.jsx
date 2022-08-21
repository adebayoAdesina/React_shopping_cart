import './navbar.css'

const NavBar = () => {
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
                    <i className='fa fa-shopping-cart' aria-hidden="true"/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;