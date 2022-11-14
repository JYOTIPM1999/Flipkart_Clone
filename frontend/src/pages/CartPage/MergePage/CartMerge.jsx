import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Addresses } from "../Addresses/Addresses";
import { PriceDetails } from "../PriceDetails/PriceDetails";
import { Products } from "../Products/Products";

function CartMerge() {
  return (
    <Box
      border={"1px"}
      borderColor="red.300"
      display={"flex"}
      m="auto"
      padding="10px"
      w={"81%"}
      gap="15px"
      position={"relative"}
      top={"5px"}
    >
      <VStack
        w={"70%"}
        spacing={3}
        borderRight={"1px"}
        borderColor={"gray.300"}
      >
        <Addresses />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Flex p={"15px"} justifyContent="flex-end" w={"100%"}>
          <Button border={"1px"}>PLACE ORDER</Button>
        </Flex>
      </VStack>
      <Box
        w={"30%"}
        border={"1px"}
        borderColor="gray.400"
        h="340px"
        p={"10px 20px"}
        boxShadow="dark-lg"
        top={"0px"}
        position={"sticky"}
      >
        <PriceDetails />
      </Box>
    </Box>
  );
}

export default CartMerge;
