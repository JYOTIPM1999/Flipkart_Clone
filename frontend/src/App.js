import "./App.css";

import { Box, Button, Flex, VStack } from "@chakra-ui/react";
// import Details from "./components/Utkarsh/Details";
import { Addresses } from "./components/Jyoti/CartPage/Addresses/Addresses";
import { PriceDetails } from "./components/Jyoti/CartPage/PriceDetails/PriceDetails";
import ProductsMerge from "./components/Jyoti/TVPage/MergingPage/ProductsMerge";
import CartMerge from "./components/Jyoti/CartPage/MergePage/CartMerge";

function App() {
  return (
    <>
      <ProductsMerge />
      <CartMerge />
    </>
  );
}

export default App;
