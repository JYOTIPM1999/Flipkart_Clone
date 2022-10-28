import "./App.css";

import ProductsMerge from "./components/Jyoti/TVPage/MergingPage/ProductsMerge";
import CartMerge from "./components/Jyoti/CartPage/MergePage/CartMerge";
import Details from "./components/Utkarsh/Details";
import { HomePage } from "./components/Aman/HomePage";
import Footer from "./components/Aman/Footer";

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
