import { Button, Flex, Text } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'

const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut, error} = useLogout();
  const authUser = useAuthStore(state => state.user)
  console.log(authUser)

  return (
    <>
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
          <Link to={`${authUser.username}`}>
            <Avatar  size='lg' 
            src={authUser.profileURL}
            />
          </Link>
          <Link to={`${authUser.username}`}>
            <Text fontSize={12} fontWeight={'bold'}>
                {authUser.username}
            </Text>
          </Link>
        </Flex>
        <Button 
        size={'xs'}
        background={'transparent'}
        _hover={{background: "transparent"}}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        onClick={handleLogout}
        loading={isLoggingOut}
        >Log out</Button>
    </Flex>
    </>
  )
}

export default SuggestedHeader