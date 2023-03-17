import {
  Container,
  Input,
  Button,
  Text,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { collection, getFirestore, addDoc, getDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContextComp";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
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
    usuario: { nombre, telefono, email },
    productos: cart.map((vln) => ({
      id: vln.id,
      total_x_Art: vln.cantidad * vln.price  })),
      SumaTotal: '$ ' + sumaTotal ()
      
  };

  return (
    <>
      <Container>
        <Text fontSize="2xl">Completa el Fomulario para confirmar la compra</Text>
        <Center w="600 px" bg="gray.100" borderWidth="2px">
          <FormControl m={3}>
            <FormLabel>Nombre</FormLabel>
            <Input
              size="lg"
              bg="whait"
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <FormLabel>Telefono</FormLabel>
            <Input
              size="lg"
              bg="whait"
              type="text"
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
            <FormLabel>E-mail</FormLabel>
            <Input
              size="lg"
              bg="whait"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
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
          </FormControl>
        </Center>
      </Container>
      <Center>
      {orderId !== "" ? Swal.fire({
       icon: 'success',
       title:'Orden Confirmada',
       text: 'ID: ' + orderId,
       backdrop: true,
       confirmButtonText: '<a href="/catalogo" style="text-decoration: none; color: white" >Volver</a>',
       confirmButtonColor: "rgb(197, 48, 48)",
      })  : "" }   

      </Center>   
    </>
  ); 
 
};

export default Checkout;
