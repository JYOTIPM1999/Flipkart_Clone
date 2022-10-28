import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Addresses = () => {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        w="100%"
        p={"10px"}
        // backgroundColor="gray.100"
        border="1px"
      >
        <Stack>
          <Text fontSize={"sm"}>
            Deliver to: Jyoti Prakash, 755019 <Button size="xs">Home</Button>
          </Text>
          <Text fontSize={"sm"}>
            Jhatiasahi, Byasanagar, Coal factory, Near Shani temple
          </Text>
        </Stack>
        <Button>Change</Button>
      </HStack>
    </>
  );
};
