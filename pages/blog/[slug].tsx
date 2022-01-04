import { BlogOutline } from 'components/BlogOutline';
import { MDXcomponents } from 'components/MDXcomponents';
import { ContainerLayout } from 'layouts/ContainerLayout';
import { Layout } from 'layouts/Layout';
import type { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore: Try to fix the params.slug is possibly undefined
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
};

interface Props {
  post: Blog;
}
const Blog: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <Layout
      showScene={false}
      meta={{
        title: post.title,
        description: post.summary,
        image: post.image,
        publishedAt: post.publishedAt,
      }}
    >
      <ContainerLayout>
        <BlogOutline post={post}>
          <Component
            components={
              {
                ...MDXcomponents,
              } as any
            }
          />
        </BlogOutline>
      </ContainerLayout>
    </Layout>
  );
};

export default Blog;
