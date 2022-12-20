import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Signup from "./Signup";


const Navbar = () => {
  const [data,setData] = useState([])
  const [sta,setSta] = useState(true)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  


  const handleChange = (e) => {
    if(e.target.value == "") return setData([])
    const obj = {str:e.target.value}
    axios.post("http://localhost:8080/tv/search",obj).then(res=>{
     console.log(res.data)    
     setData(res.data)
  })
  }

  const handlehidesearch = () => {
    axios.post("http://localhost:8080/tv/search",{str:""}).then(res=>setData(res.data))
  }

  const handleNavigate = (id) => {
    // navigate("/")
 
  //  setTimeout(()=>navigate(`/productpage/${id}`),0) 
   

    window.open(`/productpage/${id}`)
     
    
     
  };

 
  return (
    <>
    <Signup isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    <Box bg={"#2874f0"} w={"100%"} p={"5px"} onClick={handlehidesearch} >
      <Flex w={"80%"} m={"auto"} justifyContent={"space-between"}  >
        <Flex w={"55%"} gap={"20px"} alignItems={"center"}>
          <Image
            w={"15%"}
            h={"30px"}
            cursor="pointer"
            onClick={()=>navigate("/")}

            src={
              "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
            }
            
          />
          <InputGroup>
          <Input onChange={handleChange} fontWeight={500} fontSize="14px" borderRadius={"none"} bg={"white"} />
          <InputRightElement children={<SearchIcon color='#2874f0' cursor={"pointer"} />} />
          </InputGroup>
          
        </Flex>
        <Flex justifyContent={"space-around"} w={"45%"} alignItems={"center"}>
          <Button onClick={onOpen}  color={"rgb(40,116,240)"} fontSize="14px" borderRadius={"none"} w="100px" h="30px" >
            Login
          </Button>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            Become a seller
          </Text>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            More
          </Text>
          <Text color={"whiteAlpha.900"} fontWeight={"bold"}>
            Cart
          </Text>
        </Flex>
      </Flex>
      {
      data.length!==0 && <Box boxShadow={ "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} position={"absolute"} top="50px" left="250px" w="490px"  zIndex="2" bg="white" overflow={"scroll"} maxH="500px"  >
      {
        data.map((elem)=>(
          <Box  key={elem._id} onClick={()=>handleNavigate(elem._id)} display="flex" alignItems={"center"} p="4" h="60px" gap="5" mt="4" cursor={"pointer"} _hover={{backgroundColor:"rgb(40,116,240,.2)"}} >
            <Img src={elem.display_img} h="40px" w="50px"/>
            <Box>
            <Text fontSize={14} fontWeight="500" noOfLines={1}>{elem.name}</Text>
            <Text fontSize={13} fontWeight="500" color="#639af4" >{elem.brand}</Text>
            </Box>
          </Box>
        ))
      }
    </Box>}
    </Box>
    
    
     
    
   

   
    </>
  );
};

export default Navbar;
