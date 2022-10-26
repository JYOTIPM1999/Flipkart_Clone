import { Box } from "@chakra-ui/react";
import { Divider } from "@mui/material";
import "./App.css";
import ProductPage from "./components/Jyoti/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/SortingPage/SortingTv";

function App() {
  return (
    <Box m="10px" display="flex" gap="1%">
      <Box width="18%">
        <SortingTv />
      </Box>

      <Box width="81%">
        <ProductPage />
        <Divider />
        <ProductPage />
        <Divider />
        <ProductPage />
        <Divider />
        <ProductPage />
      </Box>
    </Box>
  );
}

export default App;
