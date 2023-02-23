import { useState} from "react";
import { Box,Button, Flex,Spacer,Text} from '@chakra-ui/react'
import "../main.css";

const ItemCount = () => {

    const [Cuenta, setCuenta] = useState(0);
    
    const sumar= ()=>{
        setCuenta (Cuenta + 1)
        };
    const restar= ()=>{
       
        setCuenta (Cuenta - 1) };
        
    const resetear= ()=>{
        setCuenta (0)
        };
        
  return (
  <>
  <Box borderWidth='1px' w={232}>
  <Flex maxW={230}>
  <Button variant='outline' colorScheme="red" size='sm' isDisabled={Cuenta < 1} onClick={restar}>-</Button>
  <Spacer/>
  <Text>{Cuenta}</Text>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' onClick={sumar}>+</Button>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' onClick={resetear}>Reset</Button> 
  </Flex>
  </Box>
  </>
  );
};

export default ItemCount ;