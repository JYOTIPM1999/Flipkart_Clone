import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import ProductPage from "./components/Jyoti/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/SortingPage/SortingTv";

function App() {
  return (
    <Box border="1px solid green" m="10px" display="flex" gap="10px">
      <Box width="30%">
        <SortingTv />
      </Box>
      <Box width="70%">
        <ProductPage />
        <ProductPage />
        <ProductPage />
        <ProductPage />
      </Box>
    </Box>
  );
}

export default App;
