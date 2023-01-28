import CartWidget from "./CartWidget";
import { Container,Text,Flex, Spacer,Box,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'

const NavBar = () => {
  return (
  <>  
  <Container maxW='100rem' bg='red.600' color='white'>
    
  <Flex>
    <Box w='200px' h='10' bg='red.600'>
      <Text fontSize='2xl'>Susan Flo Sweater</Text> 
    </Box>
    <Spacer />

  <Box w='400px' h='10' bg='red.600' > 
  <Flex display="flex" alignItems="center" justifyContent="space-between" pt="2">
    <Menu>
      <MenuButton>Productos</MenuButton>
       <MenuList>
        <MenuItem as='a' href='#' color='black'>Sweaters Vanlon</MenuItem>
        <MenuItem as='a' href='#' color='black'>Camisas</MenuItem>
        <MenuItem as='a' href='#' color='black'>Remeras</MenuItem>
       </MenuList>
    </Menu>
    <Spacer />
    <Menu>
      <MenuButton as='a' href='#'>Ofertas</MenuButton>
    </Menu>
      <Spacer />
      <Menu>
        <MenuButton as='a' href='#'>Contacto</MenuButton> 
      </Menu>
    </Flex>
  </Box>
    <Spacer />
    <Box w='180px' h='10' bg='red.600'>
       <CartWidget/> 
    </Box>
  </Flex>
  </Container>
  </>

   )};

export default NavBar;