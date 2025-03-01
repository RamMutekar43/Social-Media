import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
// import { Avatar } from '../ui/avatar'
import React from 'react'

const ProfileHeader = () => {
  return (
    <>
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:'column',sm:"row"}} >
        <AvatarGroup  
        mx={'auto'} 
        justifySelf={"center"} 
        alignSelf={"flex-start"} 
        h={{base:'64px',sm:"130px"}} 
        w={{base:'64px',sm:"130px"}} 
        border={'2px solid gray'} 
        borderRadius={'full'} size={'full'}
        >
            <Avatar.Root>
            <Avatar.Image name="this is alita" src="/post1.avif" alt="this is alita" size="full"/>
            </Avatar.Root>
        </AvatarGroup>

        <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1} >
            <Flex direction={{base:"column",sm:'row'}}
            justifyContent={{base:"center",sm:"flex-start"}}
            alignItems={'center'}
            w={'full'}
            >
                <Text fontSize={{base:'sm',md:'lg'}}>this_is_alita</Text>
                <Flex gap={4} alignItems={'center'} justifyContent={'center'} ml={{base:2,sm:4}}>
                    <Button bg={'white'} color={'black'} _hover={{bg:"whiteAlpha.800"}} size={{base:'xs',md:"sm"}}>
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>

            
        </VStack>
    </Flex>
    </>
  )
}

export default ProfileHeader