import { Heading, Stack, useDisclosure } from "@chakra-ui/react";
import { getGalleryQuery } from "api/gallery";
import type { PhotoPath } from "api/gallery";
import { ModalComponent } from "components/Modal";
import { getBlurredImage } from "helpers/imageHelpers";
import { BlogHead } from "layouts/BlogHead";
import { MotionWrapper } from "layouts/MotionWrapper";
import type { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const getStaticProps = async () => {
  const data = getGalleryQuery(0, 0, true);
  return { props: { data } };
};

const Photos: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagePath, setImagePath] = useState("");
  const configureModal = (evt: any) => {
    onOpen();
    setImagePath(evt.target.src);
  };
  return (
    <>
      <BlogHead />
      <MotionWrapper doFlex={false}>
        <Stack p={10}>
          <Stack mt={-20}>
            <Heading textAlign="center">My personal image gallery</Heading>
          </Stack>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter={10}>
              {data.map((image: PhotoPath, index) => {
                const aspectRatio = image.size.height / image.size.width;
                let baseHeight = 700;
                let baseWidth = 700;
                baseHeight =
                  aspectRatio > 1 ? baseHeight * aspectRatio : baseHeight;

                baseWidth =
                  aspectRatio < 1 ? baseWidth * (1 / aspectRatio) : baseWidth;

                return (
                  <Image
                    key={index}
                    className="pointer-image"
                    placeholder="blur"
                    blurDataURL={getBlurredImage(baseWidth, baseHeight)}
                    src={image.path}
                    height={baseHeight}
                    width={baseWidth}
                    quality="100"
                    onClick={configureModal}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </Stack>
      </MotionWrapper>
      <ModalComponent isOpen={isOpen} onClose={onClose} imagePath={imagePath} />
    </>
  );
};
export default Photos;
