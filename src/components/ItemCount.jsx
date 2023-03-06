import  { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextComp";
import { Container, Box,Button, Flex,Spacer,Text} from '@chakra-ui/react'
import "../main.css";


const ItemCount = ({ id, stock, price, name, img , description}) => {

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
                 return { ...vln, cantidad: vln.stock + cuenta };
               } else {
                 return vln;
               }
             });
           } else {
             return [...paraAgregar, { id, cantidad: cuenta, price, name, img, description }];
           }
         });
             }; 
  

  return (
  <>
  <Container>
  <Box borderWidth='1px' w={350}>
  <Flex maxW={350}>
  <Button variant='outline' colorScheme="red" size='sm' isDisabled={cuenta < 1} onClick={()=>restar()}>-</Button>
  <Spacer/>
  <Text>{cuenta}</Text>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' isDisabled={cuenta > stock} onClick={()=>sumar()}>+</Button>
   <Spacer/>
   <Button variant='outline' colorScheme="red" size='sm' onClick={()=>resetear()}>Reset</Button>  
   <Spacer/>
     <Button isDisabled={cuenta > stock} onClick={()=>Agregar()} variant="solid" colorScheme="red" size='sm'>
        Agregar: {cuenta}
     </Button>
     <Spacer/>
     <Link to={"/catalogo"}>
       <Button variant='outline' colorScheme="red" size='sm'>Volver</Button>
     </Link>
  </Flex>
  </Box>
  </Container>
  </> 
  );
};

export default ItemCount ;