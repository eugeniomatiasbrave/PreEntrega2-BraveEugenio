import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Productos1 from "../productos1.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [vanlon, setVanlon] = useState([]);

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
  return <ItemDetail vanlon={Productos1} />;
};

export default ItemDetailContainer;
