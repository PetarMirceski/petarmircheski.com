import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { GetServerSideProps } from 'next';
import { fetchPaginatedBlog } from 'lib/api/blog';
import { BlogPostResponse } from 'types/blog';

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetchPaginatedBlog();
  const data = request.data;

  return { props: { data } };
};
interface Props {
  data: BlogPostResponse;
}

const Blog: NextPage<Props> = ({ data }) => {
  console.log(data);
  return <Layout></Layout>;
};

export default Blog;
