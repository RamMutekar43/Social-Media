import Sidebar from '../../components/Sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar = pathname!=='/auth' && user;
    return (
        <>
        <Flex>
            {/* left  sidebar */}
            {canRenderSidebar? (
                <Box w={{base:"70px",md:"240px"}}>
                <Sidebar/>
                </Box>
            ) : null
            }
    
            {/* right side conntent */}
            <Box flex={1} w={{base:"calc(100% -70px)",md:"calc(100% -240px)"}}>
                {children}
            </Box>
        </Flex>
        </>
    )
}

export default PageLayout