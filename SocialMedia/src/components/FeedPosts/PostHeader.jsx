import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'


const PostHeader = () => {
  return (
    <>
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} py={2}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src="userProfile.avif" alt="user profile pic" size={'sm'}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                <Box>this_is_alita</Box>
                <Box color={"gray.500"}>_1W</Box>
            </Flex>
        </Flex>
        <Box
        cursor={"pointer"}
        fontSize={12}
        color={"blue.500"}
        _hover={{color:"white"}}
        transition={"0.2s ease-in-out"}
        >
            Unfollow
        </Box>
    </Flex>
    </>
  )
}

export default PostHeader