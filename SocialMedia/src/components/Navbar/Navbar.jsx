import { Button, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Container maxW={'3/4'} my={4}>
        <Flex w={'full'} justifyContent={{base:'center',sm:"space-between"}} alignItems={'center'}>
            <Image src="/Logo/textLogo.png" display={{base:'none',sm:"block"}} cursor={'pointer'} w={150}/>
            <Flex gap={4}>
                <Link to={"/auth"}>
                <Button backgroundColor={'blue.400'} size={'sm'}>
                    Login
                </Button>
                </Link>

                <Link to={"/auth"}>
                <Button variant={'outline'} size={'sm'}>
                    Signup
                </Button>
                </Link>
            </Flex>
        </Flex>
    </Container>
    </>
  )
}

export default Navbar