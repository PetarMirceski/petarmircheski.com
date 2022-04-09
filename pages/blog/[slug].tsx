import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";

import { BlogOutline } from "components/BlogOutline";
import { MDXcomponents } from "components/MDXcomponents";
import { BlogHead } from "layouts/BlogHead";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post: Blog) => post.slug === params?.slug);
  return { props: { post } };
};

interface Props {
  post: Blog;
}
const Blog: NextPage<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <>
      <BlogHead
        meta={{
          title: post.title,
          description: post.summary,
          image: post.image,
          publishedAt: post.publishedAt,
        }}
      />
      <BlogOutline post={post}>
        <Component
          components={
            {
              ...MDXcomponents,
            } as any
          }
        />
      </BlogOutline>
    </>
  );
};

export default Blog;
