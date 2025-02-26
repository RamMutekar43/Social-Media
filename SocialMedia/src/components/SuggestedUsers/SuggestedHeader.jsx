import { Flex, Link, Text } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <>
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='this is alita' size='lg' src='post1.avif'/>
            <Text fontSize={12} fontWeight={'bold'}>
                this_is_alita
            </Text>
        </Flex>
        <Link 
        as={RouterLink}
        top={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        style={{textDecoration:'none'}}
        >Log out</Link>
    </Flex>
    </>
  )
}

export default SuggestedHeader