import { FC, ReactNode } from 'react';
import { Flex, Box, chakra, useColorModeValue } from '@chakra-ui/react';

interface Props {
  text: string;
  image: string;
  title: string;
  icon?: ReactNode;
}
export const Card: FC<Props> = ({ text, image, title, icon }) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        mx={{ lg: 8 }}
        display={{ lg: 'flex' }}
        maxW={{ lg: '5xl' }}
        shadow={{ lg: 'lg' }}
        rounded={{ lg: 'lg' }}
      >
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
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            display="inline-flex"
            alignItems="center"
          >
            {title} {'  '} {icon && icon}
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
            {text}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
};
