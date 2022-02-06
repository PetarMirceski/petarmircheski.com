import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

export const PostWrapper: FC = ({ children }) => {
  return (
    <Box
      bg={useColorModeValue('#e8d2b5', 'black')}
      mx={{ lg: 8 }}
      p={6}
      display={{ lg: 'flex' }}
      maxW={{ lg: '5xl' }}
      shadow={{ lg: 'lg' }}
      rounded={{ lg: 'lg' }}
    >
      {children}
    </Box>
  );
};
