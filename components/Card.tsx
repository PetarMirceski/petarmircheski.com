import { Box, chakra, useColorModeValue } from '@chakra-ui/react';
import { PostWrapper } from 'layouts/PostWrapper';
import { FC, ReactNode } from 'react';

interface Props {
  image: string;
  title: string;
  icon?: ReactNode;
}
export const Card: FC<Props> = ({ image, title, icon, children }) => {
  return (
    <PostWrapper>
      <Box w={{ lg: '50%' }}>
        <Box
          h={{ base: 64, lg: 'full' }}
          rounded={{ lg: 'lg' }}
          bgSize="cover"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      </Box>

      <Box py={20} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: '50%' }}>
        <chakra.h2
          fontSize={{ base: '2xl', md: '3xl' }}
          color={useColorModeValue('black', 'white')}
          fontWeight="bold"
          display="inline-flex"
          alignItems="center"
        >
          {title}
          <Box ml={2}>{icon && icon}</Box>
        </chakra.h2>
        <chakra.p mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
          {children}
        </chakra.p>
      </Box>
    </PostWrapper>
  );
};
