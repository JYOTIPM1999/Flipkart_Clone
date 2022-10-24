import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

function SortingTv() {
  return (
    <Box border="1px solid red" p="2">
      <VStack>
        <Box>
          <Text>Filter</Text>
        </Box>
        <Box>
          <Text>Category</Text>
        </Box>
        <Box>
          <Text>PRICE</Text>
        </Box>
        <Box>
          <Text>BRAND</Text>
        </Box>
        <Box>
          <Text>SCREEN SIZE</Text>
        </Box>
        <Box>
          <Text>IDEAL FOR VIEWING DISTANCE</Text>
        </Box>
        <Box>
          <Text>RESOLUTION</Text>
        </Box>
        <Box>
          <Text>SCREEN TYPE</Text>
        </Box>
        <Box>
          <Text>SMART TV</Text>
        </Box>
        <Box>
          <Text>OPERATING SYSTEM</Text>
        </Box>
        <Box>
          <Text>CONNECTIVITY FEATURE</Text>
        </Box>
        <Box>
          <Text>CUSTOMER RATINGS</Text>
        </Box>
        <Box>
          <Text>OFFERS</Text>
        </Box>
        <Box>
          <Text>THEME</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default SortingTv;
