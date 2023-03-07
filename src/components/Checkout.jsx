import React from 'react'
import { Container,Input,Button,Text,Center,FormControl,FormLabel, Spacer} from "@chakra-ui/react";
import { useState, useContext } from "react";
import {collection, getFirestore, addDoc, getDoc } from "firebase/firestore";

const Checkout = () => {

    const [nombre, setNombre] = useState(""); // estado y llamdo del formulario
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
   // const {cart, setCart} = useContext(CartContext);

    
    const handleSubmit =(e)=>{
      
      e.preventDefault();

      if (nombre === "" || email === "" || telefono ==="") {
        alert("Completar");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      }
    //  setEmail(" ");
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      const order = {
        nombre, 
        telefono, 
        email};
       // items: cart.map((vln) => ({id:vln.id, titulo:item.nombre, cantidad:item.quantity, precio:item.precio, precio_total:item.quantity * item.precio}
       //   )),
       //   total: sumTotal()
      

  return <>

    <Container>
            <Text fontSize="2xl">Fomulario</Text>
            <Center w="600 px" bg="gray.100" borderWidth='2px'>
              <FormControl m={3}>
                <FormLabel>Nombre</FormLabel>
                <Input size="lg" bg="whait" type="text" onChange={(e)=> {  setNombre (e.target.value)  } } />
                <FormLabel>Telefono</FormLabel>
                <Input size="lg" bg="whait" type="text" onChange={(e)=> {  setTelefono (e.target.value)  } } />
                <FormLabel>E-mail</FormLabel>
                <Input size="lg" bg="whait" type="text" onChange={(e)=> {  setEmail (e.target.value)  } } />
                <Button m={4} type='submit' onClick={handleSubmit} colorScheme='teal' size='sm'>Enviar Informacion</Button>
              </FormControl>    
              </Center>
    </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Order ID:{" "}
          </Text>
          <Text fontSize="2xl">
            {orderId}
          </Text>
        </Center>       
        </> 
};

export default Checkout;