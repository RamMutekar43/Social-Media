import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import { Box, Container, VStack, Flex } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle,SkeletonText } from '../ui/skeleton';

const FeedPosts = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])

  return (
    <>
    <Container maxW={"full"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx)=>(
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10} > 
        <Flex gap="2">
          <SkeletonCircle size='10'/>
          <VStack>
            <Skeleton height={'10px'} w={'200px'}/>
            <Skeleton height={'10px'} w={'200px'}/>
          </VStack>
        </Flex>
        <Skeleton w={'full'}>
          <Box h={'500px'}>content wraped</Box>
        </Skeleton>
        </VStack>
      ))}

    {!isLoading && (
      <>
      <FeedPost img="post1.avif" username="this_is_alita" avatar="post1.avif"/>
      <FeedPost img="post2.avif" username="jaden_here" avatar="post2.avif"/>
      <FeedPost img="post3.avif" username="rayul" avatar="post3.avif"/>
      </>
    )}
    </Container>
    </>
  )
}

export default FeedPosts