import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import CloudinaryUploadWidget from "./components/UploadWidget";
import UploadWidget from "./components/UploadWidget";

import CartMerge from "./pages/CartPage/CartMerge";
import { Ho } from "./pages/Homepage/Aman";
import Footer from "./pages/Homepage/Footer";
import Homepage from "./pages/Homepage/Homepage";
import HomeSlider from "./pages/Homepage/SliderComp";

import Details from "./pages/SinglePage/Details";
import ProductsMerge from "./pages/TVPage/ProductsMerge";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <Box bg="gray.200" className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <Homepage />

      {/* <ProductsMerge /> */}
      {/* <CartMerge /> */}
      {/* <Details />  */}
      {/* <Footer /> */}
      {/* <Signup /> */}
      {/* <Button>
        <Link to={"productpage"}>Product page</Link>
      </Button> */}
      {/* <Signup /> */}
    </Box>
  );
}

export default App;
