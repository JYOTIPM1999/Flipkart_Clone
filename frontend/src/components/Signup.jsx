import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Img,
  VStack,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });
  const [signin, setSignin] = useState({ email: "", password: "" });

  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleSubmitSignup = async () => {
    if (signup.name === "" || signup.email === "" || signup.password === "") {
      toast({
        title: "Please fill all the details...",
        description: "We've created your account for you.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      await axios
        .post("http://localhost:8080/user/signup", signup)
        .then((res) => {
          if (res.data === "success") {
            setOpen(false);
            setSignup("");
          } else {
            setOpen(true);
            toast({
              title: "User already exist",
              description: "We've created your account for you.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        });
    }
  };

  const handleSubmitSignin = () => {
    axios.post("http://localhost:8080/user/signin", signin).then((res) => {
      if (res.data === "user not found") {
        toast({
          title: "User not found....",
          // description: "We've created your account for you.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (res.data === "wrong credentials") {
        toast({
          title: "Wrong credentials....",
          // description: "We've created your account for you.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "User Logged in successfully....",
          // description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  const handleSignup = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignup({
      ...signup,
      [name]: value,
    });
  };
  const handleSignin = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignin({
      ...signin,
      [name]: value,
    });
  };

  return (
    <>
      <Button onClick={onOpen}>SignUp Modal</Button>
      {open ? (
        <Modal onClose={onClose} size="2xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent
            bg={"#2874f0"}
            height={"550px"}
            display={"flex"}
            flexDirection={"row"}
          >
            <ModalCloseButton />
            <Box
              w={"40%"}
              p={"20px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box>
                <Text fontSize={"3xl"} color={"white"}>
                  Looks like you're new here!
                </Text>
                <Text color={"whiteAlpha.900"} mt={"20px"}>
                  Sign up with your mobile number to get started
                </Text>
              </Box>
              <Box>
                <Image src="https://sightsinplus.nyc3.digitaloceanspaces.com/sightsinplus/wp-content/uploads/2020/05/19074016/flipkart-logo-detail-icon.jpeg" />
              </Box>
            </Box>
            <Box w={"60%"} p={"20px"} bg={"white"}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={handleSignup}
                  value={signup.name}
                  name="name"
                  placeholder="Name"
                />
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={handleSignup}
                  value={signup.email}
                  name="email"
                  placeholder="Email"
                />
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleSignup}
                  value={signup.password}
                  name="password"
                  placeholder="Password"
                />
                <Text fontSize={"12px"}>
                  By continuing, you agree to Flipkart's
                  <span style={{ color: "#2874f0" }}> Terms of Use</span> and
                  <span style={{ color: "#2874f0" }}> Privacy Policy.</span>
                </Text>
                <Button
                  mt={4}
                  w={"100%"}
                  bg="#fb641b"
                  color={"whiteAlpha.900"}
                  type="submit"
                  _hover={"none"}
                  onClick={handleSubmitSignup}
                >
                  CONTINUE
                </Button>

                <Button
                  w={"100%"}
                  mt={5}
                  color={"#2874f0"}
                  onClick={handleClickOpen}
                >
                  Existing User? Log in
                </Button>
                <Text textAlign={"center"} fontWeight={"bold"}>
                  Or
                </Text>
                <Button
                  mt={4}
                  bg={"#2874f0"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                  }
                  _hover={"none"}
                >
                  <Image
                    w="28%"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                  />
                </Button>
              </FormControl>
            </Box>
          </ModalContent>
        </Modal>
      ) : (
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Box fontSize={"10px"} h={"550px"} display="flex">
              <Box
                display={"flex"}
                flexDir="column"
                justifyContent={"space-between"}
                p={"2px"}
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
                      name="email"
                      value={signin.email}
                      onChange={handleSignin}
                    />
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="Enter Password"
                        name="password"
                        value={signin.password}
                        onChange={handleSignin}
                      />

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
                    <Button
                      _hover={"none"}
                      bg={"#fb641b"}
                      w="100%"
                      color="white"
                      onClick={handleSubmitSignin}
                    >
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

                <Box
                  align="center"
                  fontSize={"160%"}
                  color={"#2874f0"}
                  onClick={handleClickOpen}
                >
                  New to Flipkart? Create an account
                </Box>
              </Box>
            </Box>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Signup;
