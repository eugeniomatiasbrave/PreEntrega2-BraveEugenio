
import ItemCount from "./ItemCount"; 
import { useState, useEffect } from "react";
import {doc, getDoc,getFirestore } from "firebase/firestore";
import { Center,Card,CardBody,Image,Stack,Heading,Text,CardFooter,Divider,} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
  
  const ItemDetail = ({ vanlon }) => {

    const { id } = useParams();

    const [producto , setProducto ] = useState([])

    useEffect (()=>{
      const db = getFirestore();

      const productos1Ref = doc( db, "Productos1",`${id}`);

    getDoc(productos1Ref).then((snapshot)=>{

      if(snapshot.exists()){
        setProducto(snapshot.data());
      } else{
        console.log("No existe el Producto");
      }
    });
  }, []);

  const vanlonFilter = vanlon.filter((van) => van.id == id);
    return (
      <>
        {vanlonFilter.map((van) => (
          <div key={van.id}>
            <Center p="1rem">
              <Card>
                <CardBody>
                  <Image   borderRadius="lg" src={van.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{van.name}</Heading>
                    <Text color="red.800" fontSize="l">
                      Descripcion: {van.description}
                    </Text>
                    <Text color="red.800" fontSize="l">
                      Categoria: {van.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {van.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: ${van.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                  
                <ItemCount 
                  stock={van.stock}
                  id={van.id}
                  price={van.price}
                  name={van.name}/>
                  
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  