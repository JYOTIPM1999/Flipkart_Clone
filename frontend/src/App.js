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
import HomePage from "./pages/Homepage/HomePage";


import Details from "./pages/SinglePage/Details";
import ProductsMerge from "./pages/TVPage/ProductsMerge";
import { AllRoutes } from "./Routes/AllRoutes";



function App() {

  

 

  return (
    <Box bg="gray.200" className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    
    </Box>
  );
}

export default App;
