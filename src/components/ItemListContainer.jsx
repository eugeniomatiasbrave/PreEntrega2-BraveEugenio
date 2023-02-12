import ItemList from "./ItemList";
import Productos1 from "../productos1.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";


const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Productos1.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Productos1);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
   } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Productos1.filter((vanlon) => vanlon.category === category);
  return (
    <div>
      <Center bg="gray.200" h="100px" color="gray.600">
        <Heading as="h5" size="xl">
          CATALOGO DE PRODUCTOS
        </Heading>
      </Center>
      {category ? <ItemList vanlon={catFilter} /> : <ItemList vanlon={Productos1} />}
      
    </div>
  );
};

export default ItemListContainer;
