import "./App.css";
import Signin from "./components/Signin";
import CartMerge from "./pages/CartPage/CartMerge";
import Footer from "./pages/Homepage/Footer";
import { HomePage } from "./pages/Homepage/HomePage";
import Details from "./pages/SinglePage/Details";
import ProductsMerge from "./pages/TVPage/ProductsMerge";

function App() {
  return (
    <>
      {/* <HomePage />
      <ProductsMerge />
      <CartMerge />
       <Details />
      <Footer /> */}

      <Signin/>
      
    </>
  );
}

export default App;
