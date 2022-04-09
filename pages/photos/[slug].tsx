import { Box } from "@chakra-ui/react";
import { getGalleryQuery } from "api/gallery";
import type { PhotoPath } from "api/gallery";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const gallery = getGalleryQuery(0, 0, true);
  return {
    paths: gallery.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const gallery = getGalleryQuery(0, 0, true);
  const post = gallery.find((post) => post.slug === params?.slug);
  return { props: { post } };
};
interface Props {
  post: PhotoPath;
}
const Photo: NextPage<Props> = ({ post }) => {
  return (
    <BlogHead meta={{ image: post.slug }}>
      <MotionWrapper doFlex={false}>
        <Box mx="auto" maxW="5xl" pt="2">
          <Image
            quality="100"
            src={post.path}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </Box>
      </MotionWrapper>
    </BlogHead>
  );
};

export default Photo;
