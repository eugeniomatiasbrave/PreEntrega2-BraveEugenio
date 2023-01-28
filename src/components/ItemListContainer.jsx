import React from 'react'
import { Container,Text, Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
  <>  
  <Container>   
    <Center w='500px' h="300px" bg='gray.200' color='black' border='1px' borderColor='gray.400' mt="100px">
      < Text  fontSize='4xl'>{greeting} </Text>
    </Center>
  </Container>
  </>
  )
}

export default ItemListContainer;