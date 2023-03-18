import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading, Center, Box } from "@chakra-ui/react";
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
      <Center bg="gray.200" h="100px" color="gray.600">
        <Heading as="h5" size="xl">
          CATALOGO DE PRODUCTOS
        </Heading>
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
