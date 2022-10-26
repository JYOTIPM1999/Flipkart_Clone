import { Box } from "@chakra-ui/react";
import "./App.css";
import { Breadcrumbs } from "./components/Jyoti/TVPage/Breadcrums/BreadCrumbs";
import ProductPage from "./components/Jyoti/TVPage/ProductPage/ProductPage";
import SortingTv from "./components/Jyoti/TVPage/SortingPage/SortingTv";
import Details from "./components/Utkarsh/Details";

function App() {
  return (
    <>
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
      <Details />
      {/* const  [display, setDisplay] = useState(true)
      <Box display={display ? "flex" : "gird"}>
        {display && <Text>About</Text>}
      </Box> */}
    </>
  );
}

export default App;
