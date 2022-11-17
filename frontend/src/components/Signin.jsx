import {
  Box,
  Button,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box fontSize={"10px"} h={"550px"} display="flex">
            <Box
              display={"flex"}
              flexDir="column"
              justifyContent={"space-between"}
              p={"25px"}
              bg={"#2874f0"}
              w={"40%"}
            >
              <VStack align={"left"}>
                <Text fontSize={"300%"} color={"#ffffff"} fontWeight="500">
                  Login
                </Text>
                <Text fontSize={"17px"} color={"#d0dbdb"}>
                  Get access to your Orders, Wishlist and Recommendations
                </Text>
              </VStack>

              <Img src="loginimage.png" />
            </Box>

            <Box
              p={"30px"}
              pt="40px"
              display={"flex"}
              flexDir="column"
              justifyContent={"space-between"}
            >
              <Box w={"100%"}>
                <VStack spacing={"10px"}>
                  <Input
                    mb={"20px"}
                    variant="flushed"
                    placeholder="Enter Email"
                  />
                  <InputGroup>
                    <Input variant="flushed" placeholder="Enter Password" />

                    <InputRightElement width="4.5rem">
                      <Button variant={"flushed"} color={"#2874f0"}>
                        Forgot?
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Text fontSize={"13px"}>
                    By continuing, you agree to Flipkart's{" "}
                    <span style={{ color: "#2874f0" }}>Terms of Use</span> and{" "}
                    <span style={{ color: "#2874f0" }}>Privacy Policy</span>
                  </Text>
                  <Button _hover={"none"} bg={"#fb641b"} w="100%" color="white">
                    Login
                  </Button>

                  <Button
                    color={"white"}
                    bg={"#2874f0"}
                    w="100%"
                    leftIcon={
                      <FcGoogle
                        size={"25px"}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "2px",
                          width: "30px",
                        }}
                      />
                    }
                  >
                    Login with Google
                  </Button>
                </VStack>
              </Box>

              <Box align="center" fontSize={"160%"} color={"#2874f0"}>
                New to Flipkart? Create an account
              </Box>
            </Box>
          </Box>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signin;
