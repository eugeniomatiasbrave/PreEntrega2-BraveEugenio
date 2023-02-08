import { useState} from "react";
import { Box, Flex,Spacer,Text} from '@chakra-ui/react'
import "./ItemCount.css";

const ItemCount = () => {

    const [Cuenta, setCuenta] = useState(0);
    
    const sumar= ()=>{
        setCuenta (Cuenta + 1)
        };
    const restar= ()=>{
        setCuenta (Cuenta - 1)
        
        };   
    const resetear= ()=>{
        setCuenta (0)
        };
 
  return (
  <>
  <Text>Estado del carrito</Text>
  <Box borderWidth='1px' w={232}>
  <Flex maxW={230}>
  <button className="btn-cuenta" disabled={Cuenta < 1}  onClick={restar}>-</button>
  <Spacer/>
  <Text>{Cuenta}</Text>
   <Spacer/>
   <button className="btn-cuenta" onClick={sumar}>+</button>
   <Spacer/>
   <button className="btn-cuenta" onClick={resetear}>Reset</button> 
  </Flex>
  </Box>
  </>
  );
};

export default ItemCount ;