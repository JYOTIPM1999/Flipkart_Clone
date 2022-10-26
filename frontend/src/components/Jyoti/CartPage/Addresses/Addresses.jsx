import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Addresses = () => {
  return (
    <>
      <HStack border="1px solid blue" justifyContent={"space-between"} w="100%">
        <VStack>
          <Text>Deliver to:Jyoti Prakash, 755019</Text>
          <Text>Jhatiasahi, Byasanagar, Coal factory, Near Shani temple</Text>
        </VStack>
        <Button>Change</Button>
      </HStack>
    </>
  );
};
