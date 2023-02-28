import React from 'react';
import {Box,Flex} from '@chakra-ui/react';




const CartWidget = () => {
  return (
  <>  
  <Box w="50px"  pt="2" pl="3" >
    <Flex>  
   <span className="material-symbols-outlined">shopping_cart</span>
   <h3>5</h3>
   </Flex>
  </Box>
   </>
  ); 
};

export default CartWidget;