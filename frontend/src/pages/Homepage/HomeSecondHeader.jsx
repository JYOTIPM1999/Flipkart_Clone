import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import MenuControll from "./MenuControll";

export default function HomeSecondHeader() {
  return (
    <HStack
      width={"100%"}
      gap={"20px"}
      justifyContent="center"
      alignItems={"center"}
      height="150px"
      border={"1px solid green"}
      boxSizing="border-box"
    >
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Top Offer
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Grocery
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Mobiles
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Fashion
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Electronics
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          w="85px"
        />
        <MenuControll text={"Home"} />
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Appliances
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Travel
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          Beauty Toys & More
        </Text>
      </Box>
      <Box border={"1px solid green"}>
        <Image
          src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
          w="85px"
        />
        <Text fontSize={"sm"} fontWeight="600">
          2 Wheelers
        </Text>
      </Box>
    </HStack>
  );
}
