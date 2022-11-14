import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { InfoIcon } from "@chakra-ui/icons";

export const Products = () => {
  return (
    <>
      <Box display="flex" w={"100%"} p={"10px"} gap="20px">
        <Box w={"15%"} p="20px">
          <Image
            src="https://rukminim1.flixcart.com/image/224/224/l3dcl8w0/mobile/x/v/b/-original-imagehxyyrzqtkmh.jpeg?q=90"
            alt="samsung"
          />
        </Box>
        <VStack
          w="50%"
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
      <Divider />
    </>
  );
};

// this is for app.js
{
  /* <Box
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
      </Box> */
}
