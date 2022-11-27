import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box bg={"#2874f0"} w={"100%"} p={"5px"}>
      <Flex w={"80%"} m={"auto"} justifyContent={"space-between"}>
        <Flex w={"55%"} gap={"20px"} alignItems={"center"}>
          <Image
            w={"15%"}
            h={"30px"}
            src={
              "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
            }
          />
          <Input borderRadius={"none"} bg={"white"} />
        </Flex>
        <Flex justifyContent={"space-around"} w={"45%"} alignItems={"center"}>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            Jyoti Prakash
          </Text>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            Become a seller
          </Text>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            More
          </Text>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            Cart
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
