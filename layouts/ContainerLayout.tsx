import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

export const ContainerLayout: FC = ({ children }) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'black')}
      w="full"
      alignItems="center"
      justifyContent="center"
      borderRadius="20px"
    >
      {children}
    </Flex>
  );
};
