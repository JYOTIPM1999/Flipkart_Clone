import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./main.module.css";

function Footer() {
  return (
    <>
      <VStack
        bgColor="rgb(23,35,55)"
        color={"white"}
        fontSize="xs"
        w={"100%"}
        p={"30px 60px 20px 60px"}
        boxSizing="border-box"
      >
        <HStack
          justifyContent={"space-evenly"}
          alignItems="flex-start"
          spacing={0}
          w="100%"
          textAlign={"left"}
          mb="30px"
        >
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>ABOUT</Text>
            <Text>Contact Us</Text>
            <Text>About Us</Text>
            <Text>Carrers</Text>
            <Text>Flipkart Stories</Text>
            <Text>Press</Text>
            <Text>Flipkart Wholesale</Text>
            <Text>Corporate Information</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>HELP</Text>
            <Text>Payments</Text>
            <Text>Shipping</Text>
            <Text>Cancellation & Returns</Text>
            <Text>FAQ</Text>
            <Text>Report Infrigement</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>POLICY</Text>
            <Text>Return Policy</Text>
            <Text>Teams Of Use</Text>
            <Text>Security</Text>
            <Text>Privacy</Text>
            <Text>Sitemap</Text>
            <Text>EPR Compliance</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>SOCIAL</Text>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>YouTube</Text>
          </VStack>
          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>Mail Us : </Text>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Text>
          </VStack>

          <VStack w="100%" alignItems={"flex-start"}>
            <Text color={"#878787"}>Registered Office Address:</Text>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: <span>044-45614700</span>
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="horizontal" width={"100vw"} />
        <HStack gap={"70px"} p="20px 0px 10px 0px">
          <Button>Become A Seller</Button>
          <Button>Advertise</Button>
          <Button>Gift Cards</Button>
          <Button>Help Center</Button>
          <Text>© 2007-2022 Flipkart.com</Text>
          <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
        </HStack>
      </VStack>
    </>
  );
}

export default Footer;
