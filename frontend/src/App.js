import { Box } from "@chakra-ui/react";
import "./App.css";

import { Breadcrumbs } from "./components/Jyoti/Breadcrums/BreadCrumbs";
import ProductPage from "./components/Jyoti/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/SortingPage/SortingTv";

function App() {
  return (
    <Box m="10px" display="flex" gap="1%">
      <Box w="18%">
        <SortingTv />
      </Box>
      <Box
        w="81%"
        backgroundColor={"offwhite"}
        padding="10px"
        border={"1px"}
        borderColor={"gray.300"}
      >
        <Breadcrumbs />
        <ProductPage />

        <ProductPage />

        <ProductPage />

        <ProductPage />
      </Box>
    </Box>
  );
}

export default App;
