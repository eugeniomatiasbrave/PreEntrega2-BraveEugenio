
  import vanlonImagen from "../assets/vanlon.png";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  import { Center,Card,CardBody,Image,Stack,Heading,Text,Button,CardFooter,Divider,} from "@chakra-ui/react";
  
  const ItemDetail = ({ vanlon }) => {
    const { id } = useParams();
  
    const vanlonFilter = vanlon.filter((vanlon) => vanlon.id == id);
    return (
      <>
        {vanlonFilter.map((vanlon) => (
          <div key={vanlon.id}>
            <Center p="1rem">
              <Card>
                <CardBody>
                  <Image borderRadius="lg" src={vanlonImagen} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{vanlon.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Descripcion: {vanlon.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {vanlon.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {vanlon.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: ${vanlon.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ItemCount stock={vanlon.stock} />
                  <Center >
                    <Button variant="solid" colorScheme="red">
                      Comprar
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  