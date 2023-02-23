import Item from "./Item";
import {  Flex } from "@chakra-ui/react";

const ItemList = ({ vanlon }) => {
  return (
    <>
      
        <Flex>
        {vanlon.map((vanlon) => (
          <Item key={vanlon.id} {...vanlon}/>
        ))} 
        </Flex>
        
     
    </>
  );
};

export default ItemList;