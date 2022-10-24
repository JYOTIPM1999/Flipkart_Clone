import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import ProductPage from "./components/Jyoti/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/SortingPage/SortingTv";

function App() {
  return (
    <Box display="flex" justifyContent="space-between">
      <SortingTv />
      <ProductPage />
    </Box>
  );
}

export default App;
