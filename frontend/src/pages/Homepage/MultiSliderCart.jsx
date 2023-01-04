import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function MultiSliderCart({ data }) {
  return (
    <VStack height={"310px"}  alignItems="center"justifyContent={"center"} bg="white" >
      <Box  h="220px" display={"flex"} alignItems="center"justifyContent={"center"} >
      <Image src={data.img}  />
      </Box>
      <Text fontWeight={500} >{data.name}</Text>
      <Text color={"green"} >{data.offer}</Text>
      
    </VStack>
  );
}

export default MultiSliderCart;
