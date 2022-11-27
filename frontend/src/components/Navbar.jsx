import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg={"#2874f0"} w={"100%"} p={"5px"}>
      <Flex w={"80%"} m={"auto"} justifyContent={"space-between"}>
        <Flex
          w={"55%"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image
            w={"15%"}
            h={"30px"}
            src={
              "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
            }
          />
          <InputGroup bg={"white"}>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="white.300" />}
            />
            <Input
              color={"gray"}
              borderRadius={"0px"}
              placeholder="Search for products, brands and more"
            />
          </InputGroup>
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
          <Button
            _hover={"none"}
            bg={"none"}
            rightIcon={<FaCartArrowDown />}
            color={"whiteAlpha.900"}
            fontWeight={"bold"}
          >
            Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
