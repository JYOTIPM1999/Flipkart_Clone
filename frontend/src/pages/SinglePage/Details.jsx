import axios from "axios";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  CloseButton,
  Divider,
  Heading,
  HStack,
  Image,
  Img,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { StarIcon, InfoOutlineIcon, ChevronRightIcon } from "@chakra-ui/icons";

import React from "react";
import { useState } from "react";
import styles from "./styles_u.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Btn from "./Button";
import { AiFillHeart } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import Rating from "./Rating&Review";
import Review from "./Review";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import image from "../../img/videobutton.png";

const Details = () => {
  const bank_offers = [
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
  ];

  const [data, setData] = useState({});

  const [img, setImg] = useState();
  const [vid, setVid] = useState(false);

  const [wish, setWish] = useState(false);
  const [id, setId] = useState("");

  const toast = useToast();
  const params = useParams();

  const handleWish = () => {
    setWish(!wish);

    toast({
      title: !wish ? "Added to wishlist" : "Removed from wishlist",

      status: wish ? "error" : "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleChange = (elem) => {
    if (elem.type == "img") {
      setVid(false);
    } else if (elem.type == "vid") {
      setVid(true);
    }
    setImg(elem);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/tv/singlepage?id=${params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setImg(res.data.images[0]);
      });
  }, []);

  return (
    <>
      <Box bg="white" p={"10px"} h="auto" display={"flex"} position="relative" zIndex={1}>
        <Box
          w={"40%"}
          h="90vh"
          position={"sticky"}
          top={"10px"}
          display="flex"
          border="2px"
          borderColor="gray.200"
        >
          <Box
            border={"1px solid white"}
            w={"15%"}
            h="100%"
            overflow={"scroll"}
          >
            {data?.images?.map((elem, i) => (
              <Box
                mb={"5px"}
                _hover={{ border: "2px", borderColor: "#2874f0" }}
                border="2px solid white"
                key={i}
                onMouseOver={() => handleChange(elem)}
              >
                <Image
                  border={"1px solid white"}
                  m={"auto"}
                  mb={"10px"}
                  w={"50px"}
                  src={elem.type == "img" ? elem.link : image}
                ></Image>
              </Box>
            ))}
          </Box>

          {/* large image */}

          <Box
            border={"1px solid white"}
            p={"10px"}
            w="85%"
            h={"100%"}
            position="relative"
          >
            <Box
              display={"flex"}
              justifyContent="end"
              border={"1px solid white"}
              onClick={handleWish}
            >
              <AiFillHeart color={wish ? "red" : "gray"} size={"30px"} />
            </Box>

            {vid && (
              <Box>
                <AspectRatio mb={"10px"} w="95%" h={"390px"} ratio={1}>
                  <iframe src={img.link} title={img.type} />
                </AspectRatio>
              </Box>
            )}

            {!vid && (
              <Box border={"1px solid white"} h={"400px"}>
                <Image
                  border={"1px"}
                  borderColor="white"
                  // pt={"0px"}
                  // pb="30px"
                  // mt={"20px"}
                  m={"auto"}
                  h="85%"
                  src={img ? img.link : ""}
                ></Image>
              </Box>
            )}

            <HStack border={"1px solid white"}>
              <Btn
                he="50px"
                w="50%"
                cs="yellow"
                li={<FaShoppingCart />}
                ch="ADD TO CART"
              />
              <Btn
                he="50px"
                w="50%"
                cs="orange"
                li={<AiFillThunderbolt />}
                ch="BUY NOW"
              />
            </HStack>
            {/* add to wishlist */}
          </Box>
        </Box>

        {/* details */}

        {data && (
          <Box w={"60%"} h="auto" p={"0px 5px"}>
            <VStack
              spacing={"17px"}
              p={"5px"}
              align={"Left"}
              border={"1px"}
              borderColor={"gray.200"}
            >
              <Breadcrumb
                fontSize={"13px"}
                separator={<ChevronRightIcon />}
                color={"gray.500"}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Computer</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Canon EOS..</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>

              <Text textAlign={"Left"} fontSize="20px">
                {data.name}
              </Text>

              <HStack spacing={"10px"}>
                <Button
                  borderRadius={2}
                  w={"45px"}
                  h="20px"
                  fontSize={"13px"}
                  rightIcon={<StarIcon w={"10px"} />}
                  colorScheme={"green"}
                >
                  {data.stars}
                </Button>
                <Text color={"gray.500"} fontSize={"13px"}>
                  {`${data?.ratings?.toLocaleString(
                    "en-US"
                  )} Ratings & ${data?.reviews?.toLocaleString()} Reviews`}
                </Text>
                <Image w={"65px"} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"></Image>
              </HStack>

              <Text fontWeight={500} fontSize={"15px"} color={"green"}>
                Special price
              </Text>
              <HStack>
                <Text
                  fontSize={"3xl"}
                >{`₹${data?.price?.toLocaleString()}`}</Text>
                <Text
                  fontSize={"14px"}
                  color={"gray.500"}
                  as={"s"}
                >{`₹${data?.previous_price}`}</Text>
                <Text
                  fontSize={"14px"}
                  color={"gray.500"}
                >{`${data?.discount_percent?.toLocaleString()}% off`}</Text>
                <InfoOutlineIcon color={"gray.500"} />
              </HStack>

              <Text fontWeight={500} fontSize={"15px"}>
                Available offers
              </Text>
              {bank_offers?.map((elem, i) => (
                <HStack key={i}>
                  <MdLocalOffer color="green" />
                  <Text fontSize={"14px"} noOfLines={1}>
                    <span style={{ fontWeight: "500" }}>{elem.name}</span>
                    {elem.message}
                    <span style={{ color: "#3583f0", fontWeight: 500 }}>
                      {" "}
                      T&C
                    </span>
                  </Text>
                </HStack>
              ))}

              <HStack spacing={100}>
                <Text fontWeight={500} color="gray.500" fontSize={"14px"}>
                  Delivery
                </Text>
                <HStack>
                  {" "}
                  <GoLocation />
                  <Input
                    type="number"
                    variant="flushed"
                    width={200}
                    placeholder={` Enter Delivery Pincode`}
                  />
                  <Button colorScheme={"white"} color={"#3583f0"}>
                    Check
                  </Button>
                </HStack>
              </HStack>

              <HStack spacing={100}>
                <Text fontWeight={500} color="gray.500" fontSize={"14px"}>
                  Highlights
                </Text>

                <UnorderedList>
                  {data?.highlights?.map((elem, i) => (
                    <ListItem key={i}>{elem}</ListItem>
                  ))}
                </UnorderedList>
              </HStack>

              <Text fontSize={30}>Specifications</Text>

              {data?.general_specification?.map((elem, i) => (
                <HStack key={i}>
                  <Box w={200} border="1px" borderColor="white">
                    <Heading
                      fontWeight={500}
                      color={"gray.500"}
                      fontSize={"14px"}
                    >
                      {elem.head}
                    </Heading>
                  </Box>

                  <Text textAlign={"left"}>{elem.info}</Text>
                </HStack>
              ))}
            </VStack>
            {/* Ratings and Rewiews  */}
            <Box
              marginTop="20px"
              height={"auto"}
              border={"1px"}
              width="100%"
              borderColor={"gray.300"}
            >
              {/* rating component */}
              <Rating
                rate={data?.rating}
                tr={data?.reviews}
                rat={data?.stars_count}
                cr={data?.circular_rating}
              />
              <Divider />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </Box>
          </Box>
        )}
      </Box>

      <Box w={"100%"} h="500px" border={"6px"} borderColor="red"></Box>
    </>
  );
};

export default Details;
