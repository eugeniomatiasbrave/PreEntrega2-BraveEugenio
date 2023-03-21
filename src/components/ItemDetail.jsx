import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Box,
  Flex
  
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ vanlon2 }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const productos1Ref = doc(db, "Productos1", `${id}`);

    getDoc(productos1Ref).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Producto no encontrado...',
          footer: '<a href="/catalogo">Volver</a>'
        })
      }
    });
  }, []);

  const vanlonFilter = vanlon2.filter((van) => van.id == id);
  return (
    <> 
     {vanlonFilter.map((van) => (
       <div key={van.id}>
        <Center p="1rem">
          <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        margin="15px"
        boxShadow='2xl'>
      <Box>
      <Image h='500px' borderRadius="lg" src={van.img} />
       </Box>
      <Stack>
        <CardBody w="400px">
          <Stack spacing="3">
          <Box>
            <Heading my="15px" fontSize="3xl">{van.name}</Heading>
              <Text fontSize="l">
                 Descripcion: {van.description}
              </Text>
              <Text fontSize="l">
                 Categoria: {van.category}
              </Text>
              <Text fontSize="l">
                Stock: {van.stock}
              </Text>
                  <Heading  my="15px" color="gray.600" fontSize="2xl">
                    Precio: ${van.price}
                  </Heading>
                  </Box>
                  <Box p="5px">
                  <Text as='u'>FORMAS DE PAGO</Text>
                  <Text>3 Cuotas sin Intres de ${van.price/4} con TARJETA </Text>
                  <Text>6 Cuotas sin Intres de ${(van.price/6).toFixed(2)} con TARJETA</Text>
                  <Text>20% en EFECTIVO pagando con Deposito, Transf.Bancaria o retiro en locar en Efectivo</Text>
                  </Box>
                  <Flex h="45px" w="80px">
                   <Image src=" https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"></Image>
                   <Image src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"></Image>
                   <Image src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"></Image>
                   <Image src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"></Image>         
                  </Flex>
                </Stack>
       </CardBody>
       
       <CardFooter>
       <ItemCount
                  stock={van.stock}
                  id={van.id}
                  price={van.price}
                  name={van.name}
                  img={van.img}
                  description={van.description}  />
      </CardFooter>
   </Stack>
 </Card>
</Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
