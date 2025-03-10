import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from "./PostHeader"
import { Box, Image } from '@chakra-ui/react'

const FeedPost = ({img,username,avatar}) => {
  return (
    <Box mb={10}>
    <PostHeader username={username} avatar={avatar}/>
    <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image src={img} alt='user profilr pic'/>
    </Box>
    <PostFooter username={username}/>
    </Box>
  )
}

export default FeedPost