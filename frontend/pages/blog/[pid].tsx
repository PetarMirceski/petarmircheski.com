import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { fetchPaginatedBlog } from 'lib/api/blog';
import { BlogPostResponse } from 'types/blog';
import { BlogArticle } from 'components/blogArticle';
import { urlParser } from 'utils/urlParser';
import { Button, Flex } from '@chakra-ui/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const pageNumber = urlParser(String(context.query.pid));
  const request = await fetchPaginatedBlog(pageNumber);
  const data = request.data;
  return { props: { data } };
};

interface Props {
  data: BlogPostResponse;
}

const noMorePosts = (
  <Flex alignItems="center" justifyContent="center">
    <Button colorScheme="teal" variant="outline">
      No More Posts :'( Go Back
    </Button>
  </Flex>
);
const Blog: NextPage<Props> = ({ data }) => {
  const posts = data.data;
  const noPostsBool = posts.length === 0;

  return (
    <Layout>
      {noPostsBool && noMorePosts}
      {posts.map((post) => {
        const attributes = post.attributes;
        const image = attributes.headerImage.data.attributes.url;
        return (
          <BlogArticle
            key={post.id}
            id={post.id}
            title={attributes.title}
            description={attributes.description}
            date={attributes.createdAt}
            headerImage={image}
          />
        );
      })}
    </Layout>
  );
};

export default Blog;
