import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import CartMerge from "./pages/CartPage/CartMerge";
import Footer from "./pages/Homepage/Footer";
import HomePage from "./pages/Homepage/HomePage";
import HomeSlider from "./pages/Homepage/SliderComp";

import Details from "./pages/SinglePage/Details";
import ProductsMerge from "./pages/TVPage/ProductsMerge";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* <HomeSlider /> */}
      {/* <AllRoutes /> */}

      {/* <ProductsMerge /> */}
      {/* <CartMerge /> */}
      {/* <Details />  */}
      {/* <Footer /> */}
      {/* <Signup /> */}
      {/* <Button>
        <Link to={"productpage"}>Product page</Link>
      </Button> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
