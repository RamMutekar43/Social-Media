import { Box, Grid, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton';
import ProfilePost from './ProfilePost';


const ProfilePosts = () => {
  const [isLoading,setIsLoading] = useState(true);
  

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])  
  return (
    <>
        <Grid
        templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        }}
        gap={1}
        columnGap={1}
        >
          {isLoading && [0,1,2,3,4,4].map((_,idx)=>(
            <VStack key={idx} alignItems={'flex-start'} gap={4}>
              <Skeleton w={'full'}>
                <Box h={'300px'}>Contents wrapped</Box>
              </Skeleton>
            </VStack>
          ))}

          {!isLoading && (
            <>
            <ProfilePost img="/jack.avif"/>
            <ProfilePost img="/post2.avif"/>
            <ProfilePost img="/post3.avif"/>
            <ProfilePost img="/alice.avif"/>
            </>
          )}
        </Grid>
    </>
  )
}

export default ProfilePosts