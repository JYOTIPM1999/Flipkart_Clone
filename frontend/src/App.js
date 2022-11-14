import "./App.css";

import ProductsMerge from "./components/TVPage/MergingPage/ProductsMerge";
import CartMerge from "./components/CartPage/MergePage/CartMerge";
import Details from "./components/SinglePage/Details";
import { HomePage } from "./components/Homepage/HomePage";
import Footer from "./components/Homepage/Footer";

function App() {
  return (
    <>
      <HomePage />
      <ProductsMerge />
      <CartMerge />
      <Details />
      <Footer />
    </>
  );
}

export default App;
