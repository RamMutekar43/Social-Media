import { Box, Flex, Link,  Image } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <Box
    height={'100vh'}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    p={8}
    position={'sticky'}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >

        <Flex direction={"column"} gap={10} width={'full'} height={'full'}>
            <Link top={"/"} as={RouterLink} pl={2}  cursor={"pointer"} display={{base:'none',md:'block'}}>
            <Image src='/Logo/textLogo.png' w={150} />
            </Link>

            <Link top={"/"} as={RouterLink} display={{base:'block',md:'none'}}
            cursor={"pointer"}
            borderRadius={6}
            _hover={{bg:"whiteAlpha.200"}}
            >
            <Image src='/Logo/smLogo.png' h={50} />
            </Link>
        </Flex>
    </Box>
    </>
  )
}

export default Sidebar