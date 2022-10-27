import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { InfoIcon } from "@chakra-ui/icons";

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
        <VStack
          w="50%"
          border={"1px"}
          alignItems="flex-start"
          lineHeight={"15px"}
          padding="10px"
          boxSizing="border-box"
        >
          <Text fontWeight={"400"}>
            Infinix HOT 12 Play (Champagne Gold, 64GB)
          </Text>
          <Text color={"gray.500"} fontWeight="400" fontSize="14px">
            4 GB RAM
          </Text>
          <Text paddingTop={"10px"}>Seller: Flashstar Commerce</Text>
          <HStack paddingTop={"20px"}>
            <Text as={"s"} fontWeight="300" color={"gray.600"}>
              ₹11,999
            </Text>
            <Text fontSize={"18px"} fontWeight={"600"}>
              ₹8,399
            </Text>
            <Text fontWeight={"600"} color={"#388e3c"}>
              30% Off
            </Text>
            <Text fontWeight={"600"} color={"#388e3c"}>
              1 offer applied <InfoIcon color={"#388e3c"} />
            </Text>
          </HStack>
          <Text fontSize={"sm"} fontWeight={"500"}>
            + ₹29 Secured Packaging Fee
          </Text>
        </VStack>
        <Box
          display={"flex"}
          border={"1px"}
          w={"35%"}
          fontSize={"14px"}
          fontWeight={"500"}
          padding="10px"
          gap={"5px"}
        >
          <Text>Delivered by</Text>
          <Text>Sun Oct 30 |</Text>
          <Text>Free</Text>
          <Text>₹40</Text>
        </Box>
      </Box>
    </>
  );
};
