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

const Rating = ({rate=4.5, tr = 14052, rat=[9630,2992,666,185,579],cr=[90,70]}) => {
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
              {rate} <StarIcon w={5} />
            </Text>
            <Text fontSize={12} color="gray.500">
              {totalrating.toLocaleString()} Ratings &{" "}
            </Text>
            <Text fontSize={12} color="gray.500">
              {totalreview.toLocaleString()} Reviews
            </Text>
          </Box>
          <Box border={"1px"} borderColor="white" w={"75%"} h="auto">
            <VStack align={"left"}>
              {" "}
              {rat.map((elem, i) => {
                var rate = Math.floor((elem / tr) * 100);
                var col = "green";
                if (rate < 30 && rate > 15) {
                  col = "orange";
                } else if (rate < 15) {
                  col = "red";
                }

                return (
                  <HStack key={i}>
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
           
           
            {    
                   cr.map((elem,i)=>(

                    <VStack spacing={"0px"}>
                    <CircularProgress
                      size={"80px"}
                      thickness="6px"
                      value={elem}
                      color="green.400"
                    >
                      <CircularProgressLabel>{elem}</CircularProgressLabel>
                    </CircularProgress>
                    <Text fontWeight={500}>{(i==0 && "camera") || (i==1 && "Battery") || (i==2 && "Design") || (i==3 && "Display") }</Text>
                  </VStack> 


                   ))
                 
                  

                  
                  
             }

           
             

            

           

          
          </HStack>
        </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Rating;
