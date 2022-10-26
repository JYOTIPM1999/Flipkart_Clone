import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  VStack,
  Divider,
  useToast,
  Checkbox,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styles from "./ProductPage.module.css";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

function ProductPage() {
  const [wishlist, setWishlist] = useState(false);

  const toast = useToast();
  const handleClick = () => {
    setWishlist(!wishlist);
    toast({
      title: wishlist
        ? "Item removed from the wishlist"
        : "Item added to the cart",
      status: wishlist ? "error" : "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <>
      <Box
        border="1px "
        borderColor={"gray.300"}
        h="270px"
        display="flex"
        gap={"10px"}
        padding={"20px 20px "}
      >
        <Box w={"20%"}>
          <Box ml={"90%"} onClick={handleClick} mb="10px">
            <BsFillHeartFill
              color={wishlist ? "red" : "gray"}
              cursor="pointer"
            />
          </Box>
          <Box alignItems="center" m={"auto"}>
            <Image
              src="https://rukminim1.flixcart.com/image/312/312/kzn17680/television/o/q/p/a-3210s-f-adsun-original-imagbhqzhafpzhyz.jpeg?q=70"
              w="80%"
            />
          </Box>
          <Checkbox mt={"40px"}>Add to compare</Checkbox>
        </Box>

        <Stack w={"50%"}>
          <Text fontSize={"lg"} fontWeight="600">
            Adsun Frameless 80 cm (32 inch) HD Ready LED Smart Android Based TV
          </Text>
          <HStack spacing={1} alignItems="center">
            <Box className={styles.stardiv}>
              3.8 <AiFillStar />
            </Box>
            <Text fontSize={"14px"} color="gray" fontWeight={"500"}>
              10000 Ratings &
            </Text>
            <Text fontSize={"14px"} color="gray" fontWeight={"500"}>
              2500 Reviews
            </Text>
          </HStack>
          <VStack align={""}>
            <UnorderedList fontSize={"14px"}>
              <ListItem>Operating System: Android Based</ListItem>
              <ListItem>HD ready 1366 x 768 Pixels</ListItem>
              <ListItem>3 Years Standard Manufaturer warranty</ListItem>
            </UnorderedList>
          </VStack>
        </Stack>

        <Stack width={"30%"}>
          <HStack alignItems="center" gap={"40px"}>
            <Text fontSize={"2xl"} fontWeight="medium">
              ₹8,900
            </Text>
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              w="80px"
              h="20px"
            />
          </HStack>
          <HStack gap="10px">
            <Text fontSize={"16px"} color="gray" as="s">
              ₹29900
            </Text>
            <Text fontSize={"16px"} color="rgb(38, 165, 65)" fontWeight={"600"}>
              70% off
            </Text>
          </HStack>
          <Text fontSize={"12px"}>Free delivery</Text>
          <Text fontSize={"14px"} color="rgb(38, 165, 65)" fontWeight={"bold"}>
            Bank Offer
          </Text>
        </Stack>
      </Box>
      <Divider />
    </>
  );
}

export default ProductPage;

//its going to append in app.js
{
  /* <Box m="10px" display="flex" gap="1%">
  <Box w="18%">
    <SortingTv />
  </Box>
  <Box
    w="81%"
    backgroundColor={"offwhite"}
    padding="10px"
    border={"1px"}
    borderColor={"gray.300"}
  >
    <Breadcrumbs />
    <ProductPage />
    <ProductPage />
    <ProductPage />
    <ProductPage />
  </Box>
</Box>; */
}
