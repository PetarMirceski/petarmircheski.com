import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Container } from "@chakra-ui/react";
import { MotionWrapper } from "layouts/MotionWrapper";
import Image from "next/image";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import type { Photo, RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
interface PicRequest {
  secret: string;
  id: string;
  server: string;
}

export async function getStaticProps() {
  const API_URL = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.API_KEY}&user_id=199085309%40N08&format=json&nojsoncallback=1`;

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const picData = await Promise.all(
        data.photos.photo.map(async (pic: PicRequest) => {
          const sizeUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${process.env.API_KEY}&photo_id=${pic.id}&format=json&nojsoncallback=1`;
          const sizeResponse = await fetch(sizeUrl);
          const sizeData = await sizeResponse.json();
          const selectedSize = sizeData.sizes.size[8]; // You can choose the size index as needed

          return {
            id: pic.id,
            src: selectedSize.source,
            width: selectedSize.width,
            height: selectedSize.height,
          };
        })
      );

      return picData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const photos = await fetchData();

  return {
    props: {
      photos,
    },
    revalidate: 3600, // Regenerate every hour or as needed
  };
}

function Photos({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MotionWrapper>
        <Container maxW="container.xl" py={4}>
          <PhotoAlbum
            layout="masonry"
            onClick={({ index }) => setIndex(index)}
            photos={photos || []}
            renderPhoto={NextJsImage}
            defaultContainerWidth={1600}
            sizes={{ size: "calc(100vw - 240px)" }}
          />
        </Container>
      </MotionWrapper>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </>
  );
}

export default Photos;
