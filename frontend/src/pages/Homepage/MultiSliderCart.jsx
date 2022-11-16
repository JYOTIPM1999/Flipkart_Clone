import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function MultiSliderCart({ data }) {
  return (
    <VStack height={"366px"} justifyContent="center" alignItems={"center"}>
      <Image src={data.img} height="60%" width={"60%"} />
      <Text>{data.name}</Text>
      <Text>{data.offer}</Text>
    </VStack>
  );
}

export default MultiSliderCart;
