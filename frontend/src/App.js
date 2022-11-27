import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import CartMerge from "./pages/CartPage/CartMerge";
import Footer from "./pages/Homepage/Footer";
import Homepage from "./pages/Homepage/Homepage";

import Details from "./pages/SinglePage/Details";
import ProductsMerge from "./pages/TVPage/ProductsMerge";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <Homepage/>
    
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
