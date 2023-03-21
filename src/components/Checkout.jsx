import {
 Box,
  Input,
  Button,
  Text,
  Center,
  FormControl,
  FormLabel,
  Container,
  Textarea
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContextComp";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [orderId, setOrderId] = useState("");
  const [cart, setCart, setCuenta, cantidad, sumaTotal] = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || telefono === "") {
      alert("Completar");
    } else {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id)); 
    }
      };

  if(orderId) { setCuenta(0)} else {
    {cantidad};
  }

  const order = {
    usuario: { nombre, telefono, email, mensaje },
    productos: cart.map((vln) => ({
      id: vln.id,
      total_x_Art: vln.cantidad * vln.price  })),
      SumaTotal: '$ ' + sumaTotal ()
      
  };

  return (
    <>
    <Container maxW='container.sm' my="40px" centerContent>
       <Box my="10px">
           <Text fontSize="xl">COMPLETA EL FORMULARIO PARA CONFIRMAR LA COMPRA</Text>
         </Box>
         
          <FormControl  borderWidth="1px" p="15px" >
            <FormLabel size='sm' >Nombre</FormLabel>
            <Input
              placeholder='nombre y apellido' size='md'
              bg="whait"
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <FormLabel>Telefono</FormLabel>
            <Input
              placeholder='telefono' size='md'
              bg="whait"
              type="text"
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder='e-mail' size='md'
              bg="whait"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />   
            <FormLabel>Mensaje Opcional</FormLabel> 
            <Textarea placeholder='Mensaje' size='md'
              bg="whait"
              type="text"
              onChange={(e) => {
                setMensaje(e.target.value);
              }} 
              />  
          </FormControl>  
        
        
        <Button
              m={4}
              type="submit"
              onClick= {handleSubmit}
              variant="solid"
              colorScheme="red"
              size="sm"
            >
              Enviar y confirmar Compra       
            </Button>
      
      <Center>
      {orderId !== "" ? Swal.fire({
       icon: 'success',
       title:'Muchas Gracias Orden Confirmada',
       text: 'ID: ' + orderId,
       backdrop: true,
       showCancelButton: true,
       cancelButtonText: '<a href="/catalogo" style="text-decoration: none; color: white" >Volver</a>',
       confirmButtonText: 'Comprar',
       confirmButtonColor: "rgb(197, 48, 48)",
       cancelButtonColor: "rgb(145, 146, 148)",
       showconfirmButton: true,
      })  : "" }   
      </Center>   
      </Container>
    </>
  ); 
 
};

export default Checkout;
