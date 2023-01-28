import React from 'react'
import { Container,Text } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
  <>  
  <Container maxW='50rem' bg='gray.300' color='black'>
  <Text fontSize='4xl'>{greeting}</Text>
  </Container>
  </>
  )
}

export default ItemListContainer;