//import { CartContext } from "../contexts/CompraCartContext";
import { useState, useContext} from "react";
import {Container, FormControl, Input, Text, Button} from '@chakra-ui/react'

const Cart = () => {
  //const [cart, setCart] = useContext(CartContext);
  const [nombre, setNombre] = useState("");

const handleSubmit =(e)=>{

   console.log(nombre);
   e.preventDefault();
  };

  return (     
<>
<Container w="600 px">
  <Text> Formulario de prueba</Text>
    <FormControl >
    <Input type="text" onChange={(e)=> {setNombre(e.target.value)} }   />
    <Button type='submit'onClick={handleSubmit} colorScheme='teal' size='sm'>Enviar</Button>
    </FormControl>
  </Container>
</>
  );
};

export default Cart;