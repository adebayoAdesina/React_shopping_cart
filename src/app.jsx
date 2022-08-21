import Cart from "./components/cart";
import NavBar from "./components/navbar";
import HomeScreen from "./screen/home_screen";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Cart/>
            <HomeScreen/>
        </div>
    );
}

export default App;