import { CartContext } from "../context/CartContextComp";
import { useState, useContext} from "react";
import {Container, Center, Card, Text, Button, CardBody, Image, Box} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, setCart, deleteCart , removeItem] = useContext(CartContext);

  
  return (     
     <>
     <Container >
      <Text>Mi Carrito</Text>
        {cart.map((vln)=>{
           return(
             <Container >
               <Center p="1rem">
                 <Card>
                  <CardBody key={vln.id}>
                   <Image borderRadius="lg" src={vln.img} /> 
                   <Text color="gray.600" fontSize="xxl"> {vln.name}</Text>          
                   <Text color="gray.600" fontSize="xl"> Precio: ${vln.price}   </Text>
                   <Text color="blue.800" fontSize="l" > Descripcion: {vln.description}</Text>
                   <Text color= "red.600" fontSize="xl"> Agregado: {vln.cantidad}  </Text> 
                   <Button  variant="solid" colorScheme="red" size='sm' onClick={() => removeItem(vln.id)}> Eliminar Producto  </Button>    
                  </CardBody>
                 </Card>
               </Center>
             </Container>
             )})} 
              <Box>
                 <Link to={"/catalogo"}>
                   <Button  variant="solid" colorScheme="red" size='sm' onClick={deleteCart}
                      >Vaciar Carrito
                   </Button>   
                 </Link>
              </Box>

            </Container>
            </> 
            )};
          
export default Cart;