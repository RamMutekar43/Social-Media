// import './App.css'
import { ColorModeButton } from "./components/ui/color-mode"
import { useColorModeValue, useColorMode } from './components/ui/color-mode' 
import { Box, Button } from "@chakra-ui/react"

function App() {
  const bg = useColorModeValue("gray.200", "black")
  const color = useColorModeValue("black", "white")
  const { toggleColorMode } = useColorMode()

  return (
    <Box bg={bg} className=" h-screen">
      <h1>Social Media</h1>
      <Button onClick={toggleColorMode} >Toggle</Button>
    </Box>
  )
}

export default App
