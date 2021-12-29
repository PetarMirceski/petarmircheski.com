import { FC } from 'react';
import {
  Image,
  Link,
  Flex,
  Box,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { addBaseUrlToImage } from 'utils/imageUrlUtils';
import moment from 'moment';

interface Props {
  title: string;
  headerImage: string;
  description: string;
  date: string;
  id: number;
}
export const BlogArticle: FC<Props> = ({
  title,
  headerImage,
  description,
  date,
}) => {
  const dateObject = moment(date);
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={addBaseUrlToImage(headerImage)}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              {title}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {description}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                {dateObject.format('MMMM Do')}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
