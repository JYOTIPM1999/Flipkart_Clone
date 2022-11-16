import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'

const Signin = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

    <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent >

      <Box h={"70vh"}   display="flex" >

<Box p={"25px"} bg={"#2874f0"}  w={"35%"}>
    <VStack align={'left'} >
     <Text fontSize={"30px"} color={"#ffffff"} fontWeight="500">Login</Text>
     <Text fontSize={"17px"} color={"#d0dbdb"}>Get access to your Orders, Wishlist and Recommendations</Text>
    </VStack>
</Box>

<Box p={"20px"} display={"flex"} flexDir="column" justifyContent={"space-between"}>
<Box  w={"100%"}>
    <VStack spacing={"10px"}>
    <Input variant='flushed' placeholder='Enter Email' />
     <Input variant='flushed' placeholder='Enter Password' />
     <Text fontSize={"13px"} >By continuing, you agree to Flipkart's <span style={{color:"#2874f0"}} >Terms of Use</span> and <span style={{color:"#2874f0"}}>Privacy Policy</span></Text>
     <Button bg={"#fb641b"} w="100%" color="white" >Login</Button>
     <Text>OR</Text>
     <Button color={"white"} bg={"#fb641b"} w="100%" >Login with Google</Button>

    </VStack>
</Box>

<Box align="center" color={"#2874f0"}>New to Flipkart? Create an account</Box>

</Box>

</Box>
        <ModalCloseButton />
       
        
      </ModalContent>
    </Modal>
  </>
  )
}

export default Signin