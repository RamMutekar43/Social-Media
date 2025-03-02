import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { InputGroup } from '../ui/input-group';

const PostFooter = ({username,isProfilePage}) => {
    const [liked,setLiked] = useState(false);
    const [likes,setLikes] = useState(1000);
    
    const handleLike = ()=>{
        if(liked){
            setLiked(false);
            setLikes(likes-1);
        }else{
            setLiked(true);
            setLikes(likes+1);
        }
    }
  return (
    <>
    <Box mt={'auto'}>
    <Flex alignItems={"center"} gap={5} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} fontSize={18} cursor={"pointer"}>
            {!liked ? (<NotificationsLogo/>):(<UnlikeLogo/>)}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo/>
        </Box>
    </Flex>
    <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
    </Text>
    {!isProfilePage && (
        <>
        <Text fontWeight={700} fontSize={"sm"}>
        {username}{" "}
        <Text as={'span'} fontWeight={400}>
            Feeling good
        </Text>
        </Text>
        <Text color={"gray"} fontSize={"sm"}>
            View all 1,000 comments
        </Text>
        </>
    )}

    <Flex alignItems={'center'}  w={'full'}>
        <InputGroup w={'full'}
    
        flex='1'
        endElement={
            <Button
            px={0}
            fontSize={14}
            color={"blue.500"}
            fontWeight={600}
            cursor={"pointer"}
            _hover={{color:"white"}}
            bg={"transparent"}
            >
            Post
        </Button>
        }
        >
        <Input variant={"flushed"} placeholder='Add a comment...' fontSize={14} w={'full'}/>
        </InputGroup>
    </Flex>
    </Box>
    </>
  )
}

export default PostFooter