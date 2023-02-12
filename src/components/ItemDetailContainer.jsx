import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Productos1 from "../productos1.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [vanlon, setVanlon] = useState([]);
  
  const getDatos = () => {
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

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setVanlon(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail vanlon={Productos1} />;
};

export default ItemDetailContainer;
