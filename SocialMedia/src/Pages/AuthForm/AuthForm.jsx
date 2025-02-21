import { Box, VStack, Image, Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Box border={"1px solid gray"} p={5} borderRadius={4}>
      <VStack spaceY={4}>
        <Image src='/Logo/logo-transparent-png.png' h={200}/>
        <Input type='email' fontSize={14} placeholder='Email'/>
        <Input type='password' fontSize={14} placeholder='Password'/>

        {(!isLogin)?<Input type='password' fontSize={14} placeholder='Confirm Password'/> : null}
        <Button bg={"blue.400"} w={"full"} fontSize={"sm"}>{isLogin? "Log in" : "Sign up"}</Button>
      </VStack>
    </Box>
  )
}

export default AuthForm