import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function ProductPage() {
  return (
    <>
      <Box border="1px solid blue" p="2" width="81%" bg="white" h="300px">
        <HStack>
          <Box>
            <Image
              src="https://rukminim1.flixcart.com/image/312/312/kzn17680/television/o/q/p/a-3210s-f-adsun-original-imagbhqzhafpzhyz.jpeg?q=70"
              w="200px"
            />
          </Box>
          <VStack align="left">
            <Text>
              Adsun Frameless 80 cm (32 inch) HD Ready LED Smart Android Based
              TV
            </Text>
            <HStack>
              <Flex alignItems="center">
                3.8 <AiOutlineStar />
              </Flex>
              <Text>10000 Ratings &</Text>
              <Text>2500 Reviews</Text>
            </HStack>
            <Text>-operating System-Android based</Text>
            <Text>-HD Ready 1366 x 768 Pixels</Text>
            <Text>-3 years standard manufacturing warranty form admin</Text>
          </VStack>
          <VStack align="left">
            <Text>@ 8900</Text>
            <HStack>
              <Text as="s">29900</Text>
              <Text>70% off</Text>
            </HStack>
            <Text>Free delivery</Text>
            <Text>Bank Offer</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}

export default ProductPage;
