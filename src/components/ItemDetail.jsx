  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  import { Center,Card,CardBody,Image,Stack,Heading,Text,Button,CardFooter,Divider,} from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import {doc, getDoc,getFirestore } from "firebase/firestore";


  const ItemDetail = ({ vanlon }) => {
    const { id } = useParams();

const [producto , setProducto ] = useState([])

  useEffect( ()=>{
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

  const vanlonFilter = vanlon.filter((vanlon) => vanlon.id == id);
    return (
      <>
        {vanlonFilter.map((vanlon) => (
          <div key={vanlon.id}>
            <Center p="1rem">
              <Card>
                <CardBody>
                  <Image   borderRadius="lg" src={vanlon.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{vanlon.name}</Heading>
                    <Text color="red.800" fontSize="l">
                      Descripcion: {vanlon.description}
                    </Text>
                    <Text color="red.800" fontSize="l">
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
                <Divider/>
                <CardFooter>
                  <ItemCount 
                  stock={vanlon.stock}
                  id={vanlon.id}
                  price={vanlon.price}
                  name={vanlon.name}
                   />
                  
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  