import {
  Box,
  Flex,
  GridItem,
  Image,
  Link,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { FC } from 'react';

interface Props {
  title: string;
  headerImage: string;
  description: string;
  date: string;
  slug: string;
}
export const BlogArticle: FC<Props> = ({
  title,
  headerImage,
  description,
  date,
  slug,
}) => {
  const dateObject = moment(date);
  return (
    <GridItem
      bg={useColorModeValue('#e8d2b5', 'black')}
      shadow="md"
      rounded="lg"
    >
      <Box mx="auto" maxW="2xl">
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={headerImage}
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
              href={`/blog/${slug}`}
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
    </GridItem>
  );
};
