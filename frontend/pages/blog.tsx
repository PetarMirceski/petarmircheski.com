import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { fetchPaginatedBlog } from 'lib/api/blog';
import { BlogPostResponse } from 'types/blog';
import { BlogArticle } from 'components/blogArticle';

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetchPaginatedBlog();
  const data = request.data;

  return { props: { data } };
};
interface Props {
  data: BlogPostResponse;
}

const Blog: NextPage<Props> = ({ data }) => {
  const posts = data.data;
  return (
    <Layout>
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
