import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FancyLink } from "components/Links";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <>
      <BlogHead />
      <MotionWrapper>
        <Container maxW="container.md" py={8}>
          <SimpleGrid columns={1} spacing={0} pt={14}>
            <Box>
              <Center>
                <Heading as="h1" size="4xl">
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
        </Container>
      </MotionWrapper>
    </>
  );
};

export default Custom404;
