import CartWidget from "./CartWidget";
import { Container,Flex, Spacer,Box,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react'
import "./NavBar.css";


const NavBar = () => {
  return (
  <>  
  <Container maxW='100rem' bg='red.600' color='white'>
    
  <Flex>
    <Box w='300px' h='12' bg='red.600'>
      <h2 className="fuente-brand">Susan Flo Sweaters</h2> 
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