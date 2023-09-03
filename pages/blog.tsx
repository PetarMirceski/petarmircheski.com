import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { BlogArticle } from "components/BlogArticle";
import { Blog, allBlogs } from "contentlayer/generated";
import { BlogArticlesGrid } from "layouts/BlogArticlesGrid";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps = () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  const trimmedPosts = posts.map((post) => {
    return {
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      publishedAt: post.publishedAt,
      image: post.image,
    };
  }) as Blog[];
  return { props: { trimmedPosts } };
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  trimmedPosts,
}) => {
  return (
    <MotionWrapper>
      <BlogHead />
      <Container maxW="container.xl" py={8}>
        <Box p={4} textAlign="center">
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            My Personal Blog
          </Heading>

          <Text mb={6} textAlign="center">
            Sometimes I write stuff sometimes I don&apos;t.
          </Text>
        </Box>
        <Box>
          <BlogArticlesGrid>
            {trimmedPosts.map((post: Blog, id: number) => {
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
        </Box>
      </Container>
    </MotionWrapper>
  );
};

export default Blog;
