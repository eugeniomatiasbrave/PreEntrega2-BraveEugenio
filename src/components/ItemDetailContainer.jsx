import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [vanlon, setVanlon] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const Productos1Collection = collection(db, "Productos1");
    getDocs(Productos1Collection).then((quierySnapshot) => {
      const Productos1 = quierySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setVanlon(Productos1);
    });
  }, []);

  return <ItemDetail vanlon2={vanlon} />;
};

export default ItemDetailContainer;
