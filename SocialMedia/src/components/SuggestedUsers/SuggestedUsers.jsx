import { Flex, VStack, Text, Center, Box, Link, Span } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import { MdCopyright } from 'react-icons/md'

const SuggestedUsers = () => {
  return (
    <>
    <VStack px={6} py={8} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={'space-between'} w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={'bold'} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser/>
        <SuggestedUser/>
        <SuggestedUser/>

        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
            © 2025 Built By{" "}
            <Link href='https://github.com/RamMutekar43' target='_blank' color={'blue.500'} fontSize={14}>RamMutekar43</Link>
        </Box>
    </VStack>
    </>
  )
}

export default SuggestedUsers