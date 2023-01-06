import { Box } from "@chakra-ui/react";
import React from "react";
import { Breadcrumbs } from "./BreadCrumbs";
import ProductPage from "./ProductPage";
import SortingTv from "./SortingTV";

function ProductsMerge() {
  return (
    <Box m="10px" display="flex" gap="1%"  >
      <Box w="18%">
        <SortingTv />
      </Box>
      <Box
        w="81%"
        // backgroundColor={"offwhite"}
        bg={"white"}
        padding="10px"
        // border={"1px"}
        // borderColor={"green.300"}
      >
        <Breadcrumbs  />
        <ProductPage />
      </Box>
    </Box>
  );
}

export default ProductsMerge;
