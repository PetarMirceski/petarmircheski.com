import { Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

export const ContainerLayout: FC = ({ children }) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'black')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      borderRadius="20px"
    >
      <Stack>{children}</Stack>
    </Flex>
  );
};
