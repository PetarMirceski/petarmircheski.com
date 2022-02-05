import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { FancyLink } from 'components/FancyLink';
import { ContainerLayout } from 'layouts/ContainerLayout';
import { Layout } from 'layouts/Layout';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <Layout showScene={false}>
      <ContainerLayout>
        <SimpleGrid columns={1} spacing={0}>
          <Box>
            <Center>
              <Heading as="h1" size="4xl" isTruncated>
                404 😿
              </Heading>
            </Center>
          </Box>
          <Box pb={10} mt={3}>
            <Text>
              Maybe you tried to access something that is keep like a big big
              scary top secretative secret secret.
            </Text>
            <Text>
              Maybe you just misspelled the query string or maybe accessed
              something that was here but now it&apos;s not.
            </Text>
            <Text>
              Either way if you want to continue browsing please go back ❤️.
            </Text>
          </Box>
          <Box>
            <Center>
              <FancyLink href="/">
                <Button
                  rightIcon={<ArrowBackIcon />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Go Back
                </Button>
              </FancyLink>
            </Center>
          </Box>
        </SimpleGrid>
      </ContainerLayout>
    </Layout>
  );
};

export default Custom404;
