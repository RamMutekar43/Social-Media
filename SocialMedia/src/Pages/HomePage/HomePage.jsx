import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'
const HomePage = () => {
  return (
    <>
    <Container maxW={"3/4"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base:"none",md:"block"}} maxW={"300px"} border={"1px solid red"}>
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
    </>
  )
}

export default HomePage