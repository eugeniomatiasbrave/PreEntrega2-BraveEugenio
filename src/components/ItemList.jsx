import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ vanlon }) => {
  return (
    <>
      <Container maxW="container.sm">{
        vanlon.map((vanlon) => (
          <Item key={vanlon.id} {...vanlon}/>
        ))} 
      </Container>
    </>
  );
};

export default ItemList;