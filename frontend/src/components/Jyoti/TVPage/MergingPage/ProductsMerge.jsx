import { Box } from "@chakra-ui/react";
import React from "react";
import { Breadcrumbs } from "../Breadcrums/BreadCrumbs";
import ProductPage from "../ProductPage/ProductPage";
import SortingTv from "../SortingPage/SortingTv";

function ProductsMerge() {
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

export default ProductsMerge;
