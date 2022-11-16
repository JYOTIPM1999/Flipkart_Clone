import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import styles from "./PriceDetails.module.css";
export const PriceDetails = () => {
  return (
    <>
      <Text mb={"10px"} fontWeight={"500"} color="gray">
        PRICE DETAILS
      </Text>
      <Divider />
      <Box className={styles.boxFlex}>
        <Text fontWeight={"500"}>Price (1 item)</Text>
        <Text fontWeight={"500"}>₹11,999</Text>
      </Box>
      <Box className={styles.boxFlex}>
        <Text fontWeight={"500"}>Discount</Text>
        <Text fontWeight={"500"} color="#388e3c">
          -₹3,600
        </Text>
      </Box>
      <Box className={styles.boxFlex}>
        <Text fontWeight={"500"}>Delivery Charges</Text>
        <Text fontWeight={"500"} color="#388e3c">
          FREE
        </Text>
      </Box>
      <Box className={styles.boxFlex}>
        <Text fontWeight={"500"}>Secured Packaging Fee</Text>
        <Text fontWeight={"500"}>₹29</Text>
      </Box>
      <Divider />
      <Box className={styles.boxFlex}>
        <Text fontSize={"xl"} fontWeight={"500"}>
          Total Amount
        </Text>
        <Text fontSize={"xl"} fontWeight={"500"}>
          ₹8,428
        </Text>
      </Box>
      <Divider />
      <Text fontSize={"md"} fontWeight={"500"} mt={"10px"} color="#388e3c">
        You will save ₹3,571 on this order
      </Text>
    </>
  );
};
