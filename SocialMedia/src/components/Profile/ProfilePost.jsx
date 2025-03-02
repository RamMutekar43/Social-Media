import { GridItem, Flex, Text, Image, Box, Separator, VStack } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { DialogRoot, DialogTrigger, DialogContent,DialogHeader,DialogTitle,DialogBody,DialogCloseTrigger } from '../ui/dialog';
import { MdDelete } from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({img}) => {
  return (
    <>
    <DialogRoot placement={'center'} size={{base:'sm',md:"lg"}}>
      <DialogTrigger asChild>
    <GridItem 
    cursor={'pointer'}
    borderRadius={4}
    border={'1px solid'}
    overflow={'hidden'}
    borderColor={"whiteAlpha.300"}
    position={'relative'}
    aspectRatio={1/1}
    >
      <Flex
      opacity={0}
      _hover={{opacity:1}}
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={"blackAlpha.700"}
      transition={'all 0.3s ease'}
      justifyContent={'center'}
      >
        <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
          <Flex>
            <AiFillHeart size={20}/>
            <Text fontWeight={'bold'} ml={2}>7</Text>
          </Flex>
          <Flex>
            <FaComment size={20}/>
            <Text fontWeight={'bold'} ml={2}>7</Text>
          </Flex>
        </Flex>
      </Flex>

      <Image src={img} alt='profile post' w={'100%'} h={"100%"} objectFit={'cover'}/>
    </GridItem>
    </DialogTrigger>

      <DialogContent>
        {/* <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader> */}
        <DialogBody>
          <Flex gap={4} w={{base:"90%",md:"full"}} mx={"auto"} mt={4}> 
            <Flex
            borderRadius={4}
            overflow={'hidden'}
            border={'1px solid'}
            borderColor={'whiteAlpha.300'}
            flex={1.1} 
            >
              <Image src={img} alt='profile post'/>
            </Flex>
            <Flex flex={1} flexDirection={'column'} px={1} display={{base:'none',md:'flex'}}>
              <Flex justifyContent={'space-between'} alignItems={'center'} mb={2}>

                <Flex alignItems={'center'}  gap={4}>
                  <Avatar src={'/post1.avif'} size={'sm'} name="this is alita"/>
                  <Text fontWeight={'bold'} fontSize={12}>
                    this_is_alita
                  </Text>
                </Flex>

                <Box _hover={{bg:"whiteAlpha.300",color:'red.600'}} borderRadius={4} p={1}>
                  <MdDelete size={20} cursor={'pointer'}/>
                </Box>
              </Flex>

              <Separator size={'md'}/>

              <VStack my={2} w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
              <Comment createdAt={'1d ago'} profilePic={'/luffy.avif'} text={'Nice picture dude.'} username={'luffy'}/>
              <Comment createdAt={'12h ago'} profilePic={'/jack.avif'} text={'Looks pretty'} username={'jack'}/>
              <Comment createdAt={'3h ago'} profilePic={'alice.avif'} text={'nice one'} username={'alice'}/>
              </VStack>

              <Separator size={'sm'}/>

              <PostFooter isProfilePage={true}/>

            </Flex>
          </Flex>
        </DialogBody>
        <DialogCloseTrigger top="0" insetEnd="-12" bg="bg"/>
      </DialogContent>

    </DialogRoot>
    </>
  )
}

export default ProfilePost