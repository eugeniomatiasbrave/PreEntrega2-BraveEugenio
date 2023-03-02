import  { useState, useContext} from "react";
import { CartContext } from "../context/CartContextComp";
import { Container, Box,Button, Flex,Spacer,Text, Center} from '@chakra-ui/react'
import "../main.css";

const ItemCount = ({ id, stock, price, name }) => {

  const [cuenta, setCuenta] = useState(0);
  const [cart, setCart] = useContext(CartContext);
    
  const sumar= ()=>{
        setCuenta (cuenta + 1) 
        };
  const restar= ()=>{  
        setCuenta (cuenta - 1) 
        };      
  const resetear= ()=>{
        setCuenta (0)
        };


  const Agregar = ()=>{

    setCart((paraAgregar) => {
      const encontrado= paraAgregar.find((vln) => vln.id === id); 
      if (encontrado) {
        return paraAgregar.map((vln) => {
          if (vln.id === id) {
            return { ...vln, cantidad: vln.cantidad + cuenta };
          } else {
            return vln;
          }
        });
      } else {
        return [...encontrado, { id, cantidad: cuenta, price, name }];
      }
    });
 
        };
 
  return (
  <>
  <Container>
  <Box borderWidth='1px' w={232}>
  <Flex maxW={230}>
  <Button variant='outline' colorScheme="red" size='sm' isDisabled={cuenta < 1} onClick={()=>restar()}>-</Button>
  <Spacer/>
  <Text>{cuenta}</Text>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' onClick={()=>sumar()}>+</Button>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' onClick={()=>resetear()}>Reset</Button> 
   <Center>
     <Button  onClick={()=> Agregar()} variant="solid" colorScheme="red" size='sm'>
        Agregar
     </Button>
   </Center>
  </Flex>
  </Box>
  </Container>
  </> 
  );
};

export default ItemCount ;