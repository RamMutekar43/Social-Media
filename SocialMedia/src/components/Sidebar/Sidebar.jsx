import { Box, Flex, Link,  Image, Button} from '@chakra-ui/react'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import { Tooltip } from '../ui/tooltip'
import useLogout from '../../hooks/useLogout'


const Sidebar = () => {
  const {handleLogout, isLoggingOut, error} = useLogout();
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

            {/* SidebarItems */}
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
					  {/* <SidebarItems /> */}
				    </Flex>

            {/* Logout */}
            <Tooltip
					  showArrow
					  content={"Logout"}
					  positioning = {{placement:'right-center'}}
					  openDelay={500}
            closeDelay={100}
					  display={{ base: "block", md: "none" }}
				    >
					  <Flex
						  // onClick={handleLogout}
						  alignItems={"center"}
						  gap={4}
						  _hover={{ bg: "whiteAlpha.400" }}
						  borderRadius={6}
						  p={2}
						  w={{ base: 10, md: "full" }}
						  mt={"auto"}
						  justifyContent={{ base: "center", md: "flex-start" }}
					  >
						  <BiLogOut size={25} />
						  <Button
              onClick={handleLogout}
							display={{ base: "none", md: "block" }}
						  variant={"ghost"}
						  _hover={{ bg: "transparent" }}
						  loading={isLoggingOut}
						  >
							Logout
						  </Button>
					  </Flex>
				    </Tooltip>
        </Flex>
    </Box>
    </>
  )
}

export default Sidebar