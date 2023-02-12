import { Center, Box, Image } from "@chakra-ui/react";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <Center>
        <Box boxSize="xxl" borderWidth='6px'>
          <Image
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/256/796/themes/common/logo-2009326792-1593702256-21c3f2a44236b15b91a8ffb4fa3241c51593702257.png"
            alt="vanlon"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Inicio;