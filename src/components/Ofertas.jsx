import { Box, Card, CardBody, CardFooter, Text, Heading, Stack, Button, Image, Center } from '@chakra-ui/react'


const Ofertas = () => {
  return (
    <div>
 <Center  bg="white" h="80px" color="gray.700" borderBottom='1px' borderColor='gray.500'>
       <Text  fontSize='3xl'>OFERTAS</Text>
      </Center>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW="500px"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='http://www.vanlon.com.ar/wp-content/uploads/2022/05/VANLON-art-866.jpg'
    alt='sweater Vanlon'
  />

  <Stack>
    <CardBody>
        <Box>
        <Text fontSize="4xl" bg="yellow.200">
        -40%
      </Text>
        </Box>
      <Heading size='md'>DETALLES DEL PRODUCTO</Heading>

      <Text py='2'>
      Remera de corte clásico con cuello redondo para Mujer. Manga corta. 100% algodón. Lavable a máquina. Un clásico infaltable para cualquier look, nunca pasa de moda.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

    </div>
  )
}

export default Ofertas