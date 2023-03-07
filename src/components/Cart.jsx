import { CartContext } from "../context/CartContextComp";
import { useContext} from "react";
import { Button, Image,Table,Thead,Tr,Tbody,Td,Th} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, setCart, borrarCarrito , borrarUno] = useContext(CartContext);

  const cartTotal = () => {
    return cart.reduce((total, vln) => total += vln.cantidad, 0)
}

const sumTotal = () => {
    return cart.reduce((total, vln) => total += vln.cantidad * vln.price, 0)
};

  return (        
  <>
  <Table>
    <Thead>
      <Tr>
        <Th>Imagen</Th>
        <Th>Producto</Th>
        <Th>Precio x Uds</Th>
        <Th>Unidades</Th>   
        <Th>Total x Uds</Th>
        <Th>Accion</Th>
      </Tr>
    </Thead>
    <Tbody maxW='800 px'>
       {cart.map((vln)=>{
           return(
         <Tr key={vln.id}>                  
           <Td ><Image boxSize='100px'  src={vln.img}/></Td>
           <Td>{vln.name}</Td>     
           <Td> ${vln.price}</Td>
           <Td>{vln.cantidad}</Td>
           <Td color="gray.600" fontSize="xxl"> ${vln.cantidad * vln.price}</Td>
           <Td><Button  variant="solid" colorScheme="red" size='sm' onClick={() => borrarUno(vln.id)}> Eliminar </Button></Td>     
         </Tr>
          )})          
       }
      <Tr> 
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td>Total Unidades: {cartTotal()}</Td>
        <Td>Suma Total: ${sumTotal()}</Td>
        <Td></Td>
      </Tr>
      <Tr> 
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td> <Link to={"/catalogo"}>
       <Button  variant="solid" colorScheme="red" size='sm' onClick={borrarCarrito}
        >Vaciar Carrito
      </Button>   
     </Link></Td>
        </Tr>
    </Tbody>
    </Table>
    </>
   )
 };
 
export default Cart; 







    