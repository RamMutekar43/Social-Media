import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from "./PostHeader"
import { Box, Image } from '@chakra-ui/react'

const FeedPost = () => {
  return (
    <>
    <PostHeader/>
    <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image src='userProfile.avif' alt='user profilr pic'/>
    </Box>
    <PostFooter/>
    </>
  )
}

export default FeedPost