"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import PhotoAlbum from "react-photo-album";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Image from "next/image";

// import type { RenderPhotoProps } from "react-photo-album";

import type { Photo } from "react-photo-album";

// export default function NextJsImage({
//   photo,
//   imageProps: { alt, title, sizes, className, onClick },
//   wrapperStyle,
// }: RenderPhotoProps) {
//   return (
//     <div style={{ ...wrapperStyle, position: "relative" }}>
//       <Image
//         fill
//         src={photo}
//         placeholder={"blurDataURL" in photo ? "blur" : undefined}
//         {...{ alt, title, sizes, className, onClick }}
//         // className={`${className} z-0`}
//       />
//     </div>
//   );
// }

export const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-4/6 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        onClick={({ index }) => setIndex(index)}
        // renderPhoto={NextJsImage}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
        defaultContainerWidth={1200}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
          ],
        }}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </div>
  );
};
