import Item from "./Item";
import { Wrap } from "@chakra-ui/react";

const ItemList = ({ items }) => {
  return (
    <>
      <Wrap>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Wrap>
    </>
  );
};

export default ItemList;
