import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal onClose={onClose} size="2xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent
          bg={"#2874f0"}
          height={"70vh"}
          display={"flex"}
          flexDirection={"row"}
        >
          <Box w={"40%"} p={"20px"}>
            <Text fontSize={"3xl"} color={"white"}>
              Looks like you're new here!
            </Text>
            <Text color={"whiteAlpha.900"} mt={"20px"}>
              Sign up with your mobile number to get started
            </Text>
            <Image
              alignItems={""}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oqsC5LRzpReO79--9ZrrpdlnoxSfshopoQ&usqp=CAU"
            />
          </Box>
          <Box w={"60%"} p={"20px"} bg={"white"}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <Button
                mt={4}
                w={"100%"}
                bg="#fb641b"
                color={"whiteAlpha.900"}
                type="submit"
                _hover={"none"}
              >
                CONTINUE
              </Button>
              <Button mt={5} bg={"gray"} _hover={"none"}>
                <Image
                  w="30%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                />
              </Button>
            </FormControl>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
