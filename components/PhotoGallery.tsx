"use client";

import Image from "next/image";
import { useState } from "react";
import type { Photo } from "react-photo-album";
import {
  MasonryPhotoAlbum,
  type RenderImageContext,
  type RenderImageProps,
} from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

interface Props {
  galeryPhotos: Photo[];
  slidePhotos: Photo[];
}
export const PhotoGallery = ({ galeryPhotos, slidePhotos }: Props) => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="container mx-auto max-w-7xl px-5">
      <MasonryPhotoAlbum
        onClick={({ index }) => setIndex(index)}
        photos={galeryPhotos}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
        render={{ image: renderNextImage }}
      />

      <Lightbox
        slides={slidePhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </section>
  );
};
