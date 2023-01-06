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
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const bankOffers = {
//   bank_offers: [
//     {
//       name: "Bank Offer",
//       message:
//         "Additional ₹750 discount on SBI Credit Card and EMI txns on net cart value of INR 29,999 and above",
//     },
//     {
//       name: "Bank Offer",
//       message:
//         "Additional ₹1,000 discount on SBI Credit Card and EMI txns on net cart value of INR 39,999 and above",
//     },
//     {
//       name: "Bank Offer",
//       message:
//         "Additional ₹4,000 discount on SBI Credit Card and EMI txns on net cart value of INR 79,999 and above",
//     },
//     {
//       name: "Special Price",
//       message: "Get extra 2% off (price inclusive of cashback/coupon)",
//     },
//   ],
// };

function ProductPage() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8090/tv").then((res) => setData(res.data));
  }, []);

  const handleWishlist = (id, wish) => {
    axios.post(`http://localhost:8090/${id}`, { wishlist: !wish }).then((res) =>
      axios.get("http://localhost:8090/").then((res) => {
        setData(res.data);
      })
    );

    toast({
      title: wish ? "Item removed from the wishlist" : "Item added to the cart",
      status: wish ? "error" : "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleNavigate = (id) => {
    navigate(`/productpage/${id}`);
  };
  const handleSortrelevance = () => {
    axios.get("http://localhost:8090/tv").then((res) => setData(res.data));
  };

  const handleSort = (id) => {
    axios
      .get(`http://localhost:8090/tv/${id}`)
      .then((res) => setData(res.data));
  };

  console.log(data);
  return (
    <>
      <HStack gap={"20px"} bg="white">
        <Text onClick={handleSortrelevance}>Relevance</Text>
        <Text onClick={() => handleSort("lth")}>Sort by Low to High</Text>
        <Text onClick={() => handleSort("htl")}>Sort by High to Low</Text>
      </HStack>
      {data.map((el, i) => (
        <Box
          key={i}
          // border="1px "
          //

          h="270px"
          display="flex"
          gap={"10px"}
          padding={"20px 20px "}
          // bg="white"
          borderBottom="1px"
          borderColor={"gray.300"}
          mt="2"
          mb="2"
        >
          <Box w={"20%"}>
            <Box
              ml={"90%"}
              onClick={() => handleWishlist(el._id, el.wish)}
              mb="10px"
            >
              <BsFillHeartFill
                color={el.wish ? "red" : "gray"}
                cursor="pointer"
              />
            </Box>
            <Box alignItems="center" m={"auto"}>
              <Image src={el.display_img} w="80%" />
            </Box>
            <Checkbox mt={"40px"}>Add to compare</Checkbox>
          </Box>

          <Stack w={"50%"}>
            <Text
              cursor={"pointer"}
              onClick={() => handleNavigate(el._id)}
              fontSize={"lg"}
              fontWeight="600"
            >
              {el.name}
            </Text>
            <HStack spacing={1} alignItems="center">
              <Box className={styles.stardiv}>
                {el.stars} <AiFillStar />
              </Box>
              <Text fontSize={"14px"} color="gray" fontWeight={"500"}>
                {el.ratings.toLocaleString("en-US")} Ratings &
              </Text>
              <Text fontSize={"14px"} color="gray" fontWeight={"500"}>
                {el.reviews.toLocaleString("en-US")} Reviews
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
                ₹{el.price}
              </Text>
              <Image
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                w="80px"
                h="20px"
              />
            </HStack>
            <HStack gap="10px">
              <Text fontSize={"16px"} color="gray" as="s">
                ₹ {el.previous_price}
              </Text>
              <Text
                fontSize={"16px"}
                color="rgb(38, 165, 65)"
                fontWeight={"600"}
              >
                {el.discount_percent}% off
              </Text>
            </HStack>
            <Text fontSize={"12px"}>Free delivery</Text>
            <Text
              fontSize={"14px"}
              color="rgb(38, 165, 65)"
              fontWeight={"bold"}
            >
              Bank Offer
            </Text>
          </Stack>
        </Box>
        // <Divider />
      ))}
    </>
  );
}

export default ProductPage;
