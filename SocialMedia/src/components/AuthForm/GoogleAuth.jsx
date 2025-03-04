import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

const GoogleAuth = () => {
  return (
    <>
    <Flex alignItems={'center'} justifyContent={'center'}>
        <Image src='google.png' w={8}/>
        <Text color={'blue.500'} mx='2' cursor={'pointer'}>Log in with google</Text>
    </Flex>
    </>
  )
}

export default GoogleAuth