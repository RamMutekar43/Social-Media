import { Box, VStack, Image, Input, Button, Flex, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:''
  })

  const  navigate = useNavigate()

  const handleAuth = () => {
    // console.log(inputs);
    if(!inputs.email || !inputs.password){
      alert('Please fill all the fields')
      return;
    }
    navigate('/')
  }
  return (
    <>
    <Box border={"1px solid gray"} p={5} borderRadius={4}>
      <VStack spaceY={4}>
        <Image src='/Logo/logo-transparent-png.png' h={200} alt='Logo'/>
        <Input type='email' fontSize={14} placeholder='Email' 
        value={inputs.email}
        onChange={(e)=>setInputs({...inputs,email:e.target.value})}
        />
        <Input type='password' fontSize={14} placeholder='Password'
        value={inputs.password}
        onChange={(e)=>setInputs({...inputs,password:e.target.value})}
        />

        {(!isLogin)?<Input type='password' fontSize={14} placeholder='Confirm Password'
        value={inputs.confirmPassword}
        onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
        /> : null}

        <Button bg={"blue.500"} w={"full"} fontSize={"sm"} onClick={handleAuth}>{isLogin? "Log in" : "Sign up"}</Button>

        {/* ------------ OR ----------- */}
        <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
          <Box h={'1px'} bg={'gray.400'} flex={2}/>
          <Text mx={1} color={'white'}> OR </Text>
          <Box h={'1px'} bg={'gray.400'} flex={2}/>
        </Flex>

        <Flex alignItems={'center'} justifyContent={'center'}>
          <Image src='google.png' w={8}/>
          <Text color={'blue.500'} mx='2' cursor={'pointer'}>Log in with google</Text>
        </Flex>
      </VStack>
    </Box>

    <Box border={'1px solid gray'} p={5} borderRadius={4}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <Box mx={4} fontSize={14}>
          {isLogin? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={()=> setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
        {isLogin? "Sign up" : "Log in"}
        </Box>
      </Flex>
    </Box>
    </>
    
  )
}

export default AuthForm