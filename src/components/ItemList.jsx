import Item from "./Item";
import { Wrap } from "@chakra-ui/react";

const ItemList = ({ vanlon }) => {
  return (
    <>

<Wrap >
   
        {vanlon.map((vanlon) => (
          <Item key={vanlon.id} {...vanlon} />
        ))} 
     
  </Wrap>

    </>
  );
};

export default ItemList;
