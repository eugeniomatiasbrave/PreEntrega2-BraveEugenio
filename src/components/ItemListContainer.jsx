import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Center, Box , Text } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [Productos1, setProductos1] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const Productos1Collection = collection(db, "Productos1");
    getDocs(Productos1Collection).then((quierySnapshot) => {
      const Productos1 = quierySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductos1(Productos1);
    });
  }, []);

  const catFilter = Productos1.filter((vanlon) => vanlon.category === category);

  return (
    <Box>
      <Center  bg="white" h="80px" color="gray.700" borderBottom='1px' borderColor='gray.500'>
       <Text  fontSize='3xl'>CATALOGO DE PRODUCTOS</Text>
      </Center>
      <Center>
      {category ? (
        <ItemList vanlon={catFilter} />
      ) : (
        <ItemList vanlon={Productos1} />
      )}
      </Center>
    </Box>
  );
};

export default ItemListContainer;
