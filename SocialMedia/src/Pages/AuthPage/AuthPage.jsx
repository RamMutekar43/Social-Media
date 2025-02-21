import { Box, Container, Flex, Image, VStack} from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} minH={"100vh"} p={4} color={"white"}>
        <Container minW={"container.md"} p={0} >
            <Flex alignItems={"center"} justifyContent={"center"} >
                {/* left side image */}
                <Box display={{base:"none", md:"block"}}>
                    <Image src='/Login-bro.png' h={600}/>
                </Box>

                {/* right side form */}
                <VStack wordSpacing={4} align={"stretch"} w={'1/4'} mr={10}>
                    <AuthForm/>
                    <Box textAlign={"center"}>Get the App.</Box>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage