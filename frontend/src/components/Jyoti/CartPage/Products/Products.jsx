import {
  Box,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Products = () => {
  return (
    <>
      <Box
        display="flex"
        w={"100%"}
        border="1px solid red"
        p={"10px"}
        gap="20px"
      >
        <Box w={"15%"} p="20px" border={"1px"}>
          <Image
            src="https://rukminim1.flixcart.com/image/224/224/l3dcl8w0/mobile/x/v/b/-original-imagehxyyrzqtkmh.jpeg?q=90"
            alt="samsung"
          />
        </Box>
        <VStack w="55%" border={"1px"}>
          <Text>Infinix HOT 12 Play (Champagne Gold, 64GB)</Text>
          <Text>4 GB RAM</Text>
          <Text>Seller:Flashstar Commerce</Text>
          <HStack>
            <Text>₹11,999</Text>
            <Text>₹8,399</Text>
            <Text>30% Off</Text>
            <Text>
              1 offer applied <Icon />
            </Text>
          </HStack>
          <Text>+ ₹29 Secured Packaging Fee</Text>
        </VStack>
        <Text border={"1px"} w={"30%"}>
          Delivered by Sun Oct 30 | Free ₹40
        </Text>
      </Box>
    </>
  );
};
