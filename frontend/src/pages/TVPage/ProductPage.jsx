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

const bankOffers = {
  bank_offers: [
    {
      name: "Bank Offer",
      message:
        "Additional ₹750 discount on SBI Credit Card and EMI txns on net cart value of INR 29,999 and above",
    },
    {
      name: "Bank Offer",
      message:
        "Additional ₹1,000 discount on SBI Credit Card and EMI txns on net cart value of INR 39,999 and above",
    },
    {
      name: "Bank Offer",
      message:
        "Additional ₹4,000 discount on SBI Credit Card and EMI txns on net cart value of INR 79,999 and above",
    },
    {
      name: "Special Price",
      message: "Get extra 2% off (price inclusive of cashback/coupon)",
    },
  ],
};
const description =
  "Bring home this TV from realme and experience the stunning visuals that result from its Chroma Boost Picture Engine. Boasting a Bezel-less design and Dolby Surround Audio, this Android TV blends right into your decor and offers you audio performance that makes your favourite TV shows, movies, and other video content all the more enjoyable.";

function ProductPage() {
  const toast = useToast();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => setData(res.data));
  }, []);

  const handleClick = (id, wish) => {
    axios.post(`http://localhost:8080/${id}`, { wishlist: !wish }).then((res) =>
      axios.get("http://localhost:8080/").then((res) => {
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
  useEffect(() => {
    axios
      .get("http://localhost:8080/tv/lth")
      .then((res) => console.log(res.data));
  }, []);

  console.log(data);
  return (
    <>
      {data.map((el, i) => (
        <Box
          key={i}
          border="1px "
          borderColor={"gray.300"}
          h="270px"
          display="flex"
          gap={"10px"}
          padding={"20px 20px "}
        >
          <Box w={"20%"}>
            <Box
              ml={"90%"}
              onClick={() => handleClick(el._id, el.wish)}
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
            <Text fontSize={"lg"} fontWeight="600">
              {el.name}
            </Text>
            <HStack spacing={1} alignItems="center">
              <Box className={styles.stardiv}>
                {el.rating} <AiFillStar />
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
                ₹29900
              </Text>
              <Text
                fontSize={"16px"}
                color="rgb(38, 165, 65)"
                fontWeight={"600"}
              >
                70% off
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
