import React from 'react'
import { Container,Input,Button,Text,Center,FormControl} from "@chakra-ui/react";
import { useState } from "react";


const Checkout = () => {

    const [nombre, setNombre] = useState(""); // estado y llamdo del formulario
    const handleSubmit =(e)=>{
      console.log(nombre);
      e.preventDefault();
      };

  return <>

    <Container>
             <Text>Fomulario</Text>
            <Center w="600 px" bg="gray.100" borderWidth='4px'>
              <FormControl >
                <Input bg="whait" type="text" onChange={(e)=> {  setNombre (e.target.value)  } } />
                 <Button  type='submit' onClick={handleSubmit} colorScheme='teal' size='sm'>Enviar</Button>
                </FormControl>
               </Center>
               </Container>
             
        </> 
}

export default Checkout;