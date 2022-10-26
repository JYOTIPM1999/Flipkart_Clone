import { Box } from "@chakra-ui/react";
import "./App.css";
import { Breadcrumbs } from "./components/jyoti/Breadcrums/BreadCrumbs";
import ProductPage from "./components/jyoti/ProductPage/ProductPage";
import SortingTv from "./components/jyoti/SortingPage/SortingTv";
import Details from "./components/Utkarsh/Details";

function App() {
  return (
    <>
    {/* <Box m="10px" display="flex" gap="1%">
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
    </Box> */}
    <Details/>
    </>
  );
}

export default App;
