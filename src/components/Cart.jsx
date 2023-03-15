import { CartContext } from "../context/CartContextComp";
import { useContext, useState } from "react";
import {Button,Image,Table,Thead,Tr,Tbody,Td,Th,Center} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart, borrarCarrito, borrarUno] = useContext(CartContext);

  const unidadTotal = () => {
    return cart.reduce((total, vln) => (total += vln.cantidad), 0);
  };

  const sumaTotal = () => {
    return cart.reduce((total, vln) => (total += vln.cantidad * vln.price), 0);
  };

  if (unidadTotal() === 0) {
    Swal.fire({
      icon: "error",
      title: "El carrito se encuentra vacio",
      backdrop: true,
      confirmButtonText: '<a href="/catalogo">Volver</a>',
      confirmButtonColor: "rgb(235, 60, 150)",
    });
  }

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
        <Tbody maxW="800 px">
          {cart.map((vln) => {
            return (
              <Tr key={vln.id}>
                <Td>
                  <Image boxSize="100px" src={vln.img} />
                </Td>
                <Td>{vln.name}</Td>
                <Td> ${vln.price}</Td>
                <Td>{vln.cantidad}</Td>
                <Td color="gray.600" fontSize="xxl">
                  {" "}
                  ${vln.cantidad * vln.price}
                </Td>
                <Td>
                  <Button
                    variant="solid"
                    colorScheme="red"
                    size="sm"
                    onClick={() => borrarUno(vln.id)}
                  >
                    {" "}
                    Eliminar{" "}
                  </Button>
                </Td>
              </Tr>
            );
          })}
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>Total Unidades: {unidadTotal()}</Td>
            <Td>Suma Total: ${sumaTotal()}</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              {" "}
              <Link to={"/catalogo"}>
                <Button
                  variant="solid"
                  colorScheme="red"
                  size="sm"
                  onClick={borrarCarrito}
                >
                  Vaciar Carrito
                </Button>
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Center>
        <Link to={"/Checkout"}>
          <Button variant="solid" colorScheme="red" size="sm">
            Comprar
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default Cart;
