import ItemDetail from "./ItemDetail";
import { useState,useEffect } from "react";
import {collection, getDocs,getFirestore } from "firebase/firestore";

//import { useParams } from "react-router";

const ItemDetailContainer = () => {
 // const { id } = useParams();
  const [vanlon, setVanlon] = useState([]);


  useEffect (()=> {
    const db = getFirestore();
    const Productos1Collection = collection (db, "Productos1");
    getDocs(Productos1Collection).then((quierySnapshot)=>{
      const Productos1= quierySnapshot.docs.map((doc)=>({
        ...doc.data(), 
        id: doc.id,
      })); 
      setVanlon(Productos1);

    })
    }, []);



/*
  const getInfo = () => {
    return new Promise((resolve, reject) => {
      if (Productos1.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const vanlonFilter = Productos1.filter((vanlon) => vanlon.id == id);
        resolve(vanlonFilter);
      }, 2000);
    });
  };

  async function fetchingInfo() {
    try {
      const datosFetched = await getInfo();
      setVanlon(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingInfo();
   */
  return <ItemDetail vanlon={vanlon} />;

 
};

export default ItemDetailContainer;
