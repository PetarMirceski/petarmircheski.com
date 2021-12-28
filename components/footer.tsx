import { FC } from 'react';
import { Flex, chakra } from '@chakra-ui/react';

export const Footer: FC = () => {
  return (
    <Flex mt={6} w="full" alignItems="center" justifyContent="center">
      <chakra.p>©2021 Petar Mircheski. All Rights Reserved.</chakra.p>
    </Flex>
  );
};
