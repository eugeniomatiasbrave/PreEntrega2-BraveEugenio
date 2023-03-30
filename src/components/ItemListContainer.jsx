import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // importa el hook useParams de “react-router-dom”.
import { Center, Box , Text } from "@chakra-ui/react";   // importan los componentes Center, Box y Text de “@chakra-ui/react”.
import { collection, getDocs, getFirestore } from "firebase/firestore"; // importan las funciones collection, getDocs y getFirestore de “firebase/firestore”.

const ItemListContainer = () => {    // define la función ItemListContainer como una función de flecha que devuelve un componente.
  const [Productos1, setProductos1] = useState([]); // El hook useState para definir un estado inicial para la lista de productos. El estado inicial es un array vacío.
  const { category } = useParams();  //Utiliza el hook useParams para obtener el parámetro “category” de la URL.

  useEffect(() => {   // utilizan el hook useEffect para cargar la lista de productos desde Firebase Firestore.  Finalmente, se actualiza el estado de Productos1 con la lista de productos obtenida.
    const db = getFirestore();
    const Productos1Collection = collection(db, "Productos1"); //La función getDocs obtiene una instantánea de la colección “Productos1”.
    getDocs(Productos1Collection).then((quierySnapshot) => {
      const Productos1 = quierySnapshot.docs.map((doc) => ({  // Se mapea cada documento en un objeto que contiene los datos del documento y su ID.
        ...doc.data(),
        id: doc.id,
      }));
      setProductos1(Productos1);
    });
  }, []);

  const catFilter = Productos1.filter((vanlon) => vanlon.category === category); //La lista de productos según la categoría especificada en la URL utilizando el método filter().

  return (
    <Box>
      <Center  bg="white" h="80px" color="gray.700" borderBottom='1px' borderColor='gray.500'>
       <Text  fontSize='3xl'>CATALOGO DE PRODUCTOS</Text>
      </Center>
      <Center> 
      {category ? (  //devuelve un componente que muestra una lista de productos. Si se especifica una categoría en la URL, se muestra una lista filtrada. De lo contrario, se muestra la lista completa

        <ItemList items={catFilter} />
      ) : (
        <ItemList items={Productos1} />
      )}
      </Center>
    </Box>
  );
};

export default ItemListContainer;

















