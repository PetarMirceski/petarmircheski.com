import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { BlogArticle } from "components/BlogArticle";
import Fuse from "fuse.js";
import { BlogArticlesGrid } from "layouts/BlogArticlesGrid";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from "react";

import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

const OPTIONS = {
  includeScore: true,
  threshold: 0.5,
};

export const getStaticProps = () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { posts } };
};

interface ErrorMessageProps {
  messageTitle: string;
  onClick: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ messageTitle, onClick }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Button colorScheme="teal" variant="link" onClick={onClick}>
        {messageTitle}
      </Button>
    </Flex>
  );
};

interface NoPostProps {
  posts: Blog[];
  filteredPosts: Blog[];
  searchQuery: string;
  setQuery: (query: string) => void;
}

const PostNotFoundComponent: FC<NoPostProps> = ({
  posts,
  filteredPosts,
  searchQuery,
  setQuery,
}) => {
  const router = useRouter();

  if (posts.length === 0) {
    return (
      <ErrorMessage
        messageTitle="No posts were made. Sorry :'("
        onClick={() => router.push("/")}
      />
    );
  }

  if (filteredPosts.length === 0 && searchQuery.length !== 0) {
    return (
      <ErrorMessage
        messageTitle="Could not find you post :'(. Go back"
        onClick={() => setQuery("")}
      />
    );
  }
  return <></>;
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchByQuery = (query: string, posts: Blog[]) => {
    const resultingArray: Blog[] = [];

    if (query === "") {
      return posts;
    }
    const searchTerms = posts.map((post: Blog) => post.title);
    const fuse = new Fuse(searchTerms, OPTIONS);
    const result = fuse.search(query);
    result.forEach((term) => {
      resultingArray.push(posts[term.refIndex]);
    });
    return resultingArray;
  };

  const filteredPosts = searchByQuery(searchQuery, posts);

  return (
    <>
      <BlogHead />
      <MotionWrapper>
        <Stack p={10}>
          <Stack mt={-20}>
            <Heading textAlign="center">My Personal Blog</Heading>
            <chakra.h1 textAlign="center">
              Sometimes I write stuff sometimes I don&apos;t. Feel free to
              search some of my blog posts using the searchbar below.
            </chakra.h1>
          </Stack>

          <Center pb="10">
            <Box maxWidth="100%" width={["100%", "80%", "75%"]}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color={useColorModeValue("black", "white")} />
                </InputLeftElement>
                <Input
                  variant="outline"
                  border="1px"
                  borderColor={useColorModeValue("black", "white")}
                  placeholder="Search blog posts..."
                  _placeholder={{ color: useColorModeValue("black", "white") }}
                  value={searchQuery}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(event.target.value)
                  }
                />
              </InputGroup>
            </Box>
          </Center>

          <PostNotFoundComponent
            filteredPosts={filteredPosts}
            posts={posts}
            searchQuery={searchQuery}
            setQuery={(query: string) => {
              setSearchQuery(query);
            }}
          />
          <BlogArticlesGrid>
            {filteredPosts.map((post: Blog, id: number) => {
              return (
                <BlogArticle
                  key={id}
                  slug={post.slug}
                  title={post.title}
                  description={post.summary}
                  date={post.publishedAt}
                  headerImage={post.image}
                />
              );
            })}
          </BlogArticlesGrid>
        </Stack>
      </MotionWrapper>
    </>
  );
};

export default Blog;
