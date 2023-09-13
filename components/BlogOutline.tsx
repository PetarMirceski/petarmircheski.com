import {
  Avatar,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { FC, ReactNode } from "react";

import type { Blog } from ".contentlayer/generated/types";

interface Props {
  post: Blog;
  children: ReactNode;
}

interface BlogTitleProps {
  title: string;
  publishedAt: string;
  readingTime: string;
}

const BlogTitle: FC<BlogTitleProps> = ({ title, publishedAt, readingTime }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      w="100%"
    >
      <Heading
        letterSpacing="tight"
        mb={2}
        as="h1"
        size="2xl"
        textAlign="center"
      >
        {title}
      </Heading>
      <Flex
        justify="space-between"
        align={["initial", "center"]}
        direction={["column", "row"]}
        mt={2}
        w="100%"
        mb={4}
      >
        <Flex align="center">
          <Avatar
            size="md"
            name="Petar Mircheski"
            src="/static/images/newer_profile.jpg"
            mr={2}
          />
          <Text fontSize="sm">
            {"Petar Mircheski /"}
            {format(parseISO(publishedAt), "MMMM dd, yyyy")}
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
          {readingTime}
        </Text>
      </Flex>
    </Flex>
  );
};
export const BlogOutline: FC<Props> = ({ post, children }) => {
  return (
    <Stack
      as="article"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="20px auto 4rem auto"
      maxWidth="700px"
      w="100%"
      px={2}
    >
      {post && (
        <BlogTitle
          title={post.title}
          publishedAt={post.publishedAt}
          readingTime={post.readingTime.text}
        />
      )}
      <Container maxW="700px">{children}</Container>
    </Stack>
  );
};
