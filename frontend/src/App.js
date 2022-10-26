import "./App.css";

import { Box, Button, HStack, VStack } from "@chakra-ui/react";
// import Details from "./components/Utkarsh/Details";
// import SortingTv from "./components/Jyoti/TVPage/SortingPage/SortingTv";
// import ProductPage from "./components/Jyoti/TVPage/ProductPage/ProductPage";
// import { Breadcrumbs } from "./components/Jyoti/TVPage/Breadcrums/BreadCrumbs";
import { Addresses } from "./components/Jyoti/CartPage/Addresses/Addresses";
import { PriceDetails } from "./components/Jyoti/CartPage/PriceDetails/PriceDetails";
import { Products } from "./components/Jyoti/CartPage/Products/Products";

function App() {
  return (
    <>
      <Box
        border={"1px"}
        borderColor="red.300"
        display={"flex"}
        m="auto"
        padding="10px"
        w={"81%"}
        gap="15px"
      >
        <VStack w={"70%"} border={"1px"} borderColor="gray.300">
          <Addresses />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Box p={"15px"}>
            <Button>PLACE ORDER</Button>
          </Box>
        </VStack>
        <Box
          w={"30%"}
          // border={"1px"}
          // borderColor="gray.400"
          h="340px"
          p={"10px 20px"}
          backgroundColor="gray.100"
        >
          <PriceDetails />
        </Box>
      </Box>
    </>
  );
}

export default App;
