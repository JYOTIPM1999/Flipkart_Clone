import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import ProductPage from "./components/Jyoti/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/SortingPage/SortingTv";

function App() {
  return (
    <Flex gap="10px" margin="auto" width="99%">
      <SortingTv />
      <ProductPage />
    </Flex>
  );
}

export default App;
