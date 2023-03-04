import React from 'react';
import { CartContext } from "../context/CartContextComp";
import { useContext } from "react";
import {Box,Flex} from '@chakra-ui/react';

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce(( a , b)=> {
     return a + b.cantidad;
  }, 0 );

  return (
  <>  
  <Box w="50px"  pt="2" pl="3" >
    <Flex>  
   <span className="material-symbols-outlined">shopping_cart</span>
   <h3>{cantidad}</h3>
   </Flex>
  </Box>
   </>
  ); 
};

export default CartWidget;