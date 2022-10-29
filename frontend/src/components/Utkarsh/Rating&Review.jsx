import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./styles_u.module.css";
import { StarIcon } from "@chakra-ui/icons";

const totalrating = 14052;
const totalreview = 1964;
const rating = [9630, 2992, 666, 185, 579];

const Rating = () => {
  return (
    <Box className={styles.ratingparent}>
      <Box display={"flex"} justifyContent="space-between">
        <Text fontWeight={400} fontSize={25}>
          Rating & Reviews
        </Text>
        <Button variant={"outline"} colorScheme={"black"}>
          Rate Product
        </Button>
      </Box>
      <HStack>
        <Box
          display={"flex"}
          alignItems="center"
          border={"1px"}
          borderColor="white"
          pt={10}
          height={"auto"}
          width={"50%"}
        >
          <Box
            border={"1px"}
            borderColor="white"
            w={"25%"}
            h="auto"
            align="center"
          >
            <Text fontSize={40}>
              4.5 <StarIcon w={5} />
            </Text>
            <Text fontSize={12} color="gray.500">
              {totalrating} Ratings &{" "}
            </Text>
            <Text fontSize={12} color="gray.500">
              {totalreview} Reviews
            </Text>
          </Box>
          <Box border={"1px"} borderColor="white" w={"75%"} h="auto">
            <VStack align={"left"}>
              {" "}
              {rating.map((elem, i) => {
                var rate = Math.floor((elem / totalrating) * 100);
                var col = "green";
                if (rate < 30 && rate > 15) {
                  col = "orange";
                } else if (rate < 15) {
                  col = "red";
                }

                return (
                  <HStack>
                    <Text fontSize={"13px"}>
                      {`${i + 1} `}
                      <StarIcon w="10px" />
                    </Text>
                    <Progress
                      borderRadius={"4px"}
                      w={"70%"}
                      height="6px"
                      value={rate}
                      colorScheme={col}
                    />
                    <Text fontSize={"13px"}>{elem}</Text>
                  </HStack>
                );
              })}
            </VStack>
          </Box>
        </Box>
        {/* Progress Box */}
        <Box display={"flex"}  h={"170px"} border={"1px"} borderColor={"white"}>
        <Box h="105px" mt={"60px"} border="1px" borderColor={"white"} >
          <HStack align={"center"}>
            <VStack spacing={"0px"}>
              <CircularProgress
                size={"80px"}
                thickness="6px"
                value={90}
                color="green.400"
              >
                <CircularProgressLabel>90%</CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight={500}>Camera</Text>
            </VStack>

            <VStack spacing={"0px"}>
              <CircularProgress
                size={"80px"}
                thickness="6px"
                value={40}
                color="green.400"
              >
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight={500}>Display</Text>

            </VStack>

            <VStack spacing={"0px"}>
              <CircularProgress
                size={"80px"}
                thickness="6px"
                value={20}
                color="green.400"
              >
                <CircularProgressLabel>20%</CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight={500}>Battery</Text>

            </VStack>

            <VStack spacing={"0px"}>
              <CircularProgress
                size={"80px"}
                thickness="6px"
                value={70}
                color="green.400"
              >
                <CircularProgressLabel>70%</CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight={500}>Design</Text>

            </VStack>
          </HStack>
        </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Rating;
