import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const images = ["comment1.png","comment2.png"]

const Review = ({
  name,
  rating,
  heading,
  review,
  arrayofimg,
  likes,
  dislikes,
  date,
}) => {
  const [count, setCount] = useState({ likes: 2124, dislikes: 202 });

  return (
    <>
      <Box p={5} border={"1px"} borderColor="white" h={"auto"}>
        <VStack align={"left"}>
          <HStack spacing={"10px"}>
            <Button
              borderRadius={2}
              w={"40px"}
              h="20px"
              fontSize={"13px"}
              rightIcon={<StarIcon w={"10px"} />}
              colorScheme={"green"}
            >
              4.5
            </Button>
            <Text  color={"black"} fontWeight={600} fontSize={"15px"}>
              Great product
            </Text>
          </HStack>

          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            facilis, quam provident alias ut minima quis itaque vitae quisquam
            doloribus sint dolore laudantium perferendis dolores nemo
            dignissimos cum deserunt temporibus voluptatum saepe modi id maxime.
            Nesciunt nemo cum est quisquam, tempore praesentium unde a.
          </Text>

          <Box display={"flex"}>
            {
                images.map((elem,i)=>(
                    <Image m={"5px"} w={"60px"} h="60px" key={i} src={elem}></Image>
                ))
            }
          </Box>
          <Box display={"flex"} justifyContent="space-between" >
        
          <HStack color={"gray.600"} fontSize={13}>
            {" "}
            <Text >
              Flipkart Customer{" "}
            </Text>
            <CheckCircleIcon color={"gray.400"} />
            <Text>Oct,2020</Text>
          </HStack>
        
          <HStack color={"gray.600"}>
            <BiLike />
            <Text fontSize={13}> {count.likes} </Text>
            <Text> </Text>
            <Text> </Text>
            <BiDislike />
            <Text fontSize={13}> {count.dislikes} </Text>
          </HStack>

         
          </Box>
        </VStack>
      </Box>
      <Divider/>
    </>
  );
};

export default Review;
