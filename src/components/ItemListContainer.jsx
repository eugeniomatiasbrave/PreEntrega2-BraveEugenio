import React from 'react'
import { Container, Center,Text } from '@chakra-ui/react'
import ItemList from './ItemList';



const ItemListContainer = ({greeting}) => {
  return (
  <>  
  <Container>   
  <div>ItemLisContainer de objetos</div>
    <Center w='500px' h="300px" bg='gray.200' color='black' border='1px' borderColor='gray.400' mt="100px">
    < Text fontSize='4xl'>{greeting} </Text>
    </Center>
  </Container>
  <ItemList/>
  </>
  
  )
}

export default ItemListContainer;