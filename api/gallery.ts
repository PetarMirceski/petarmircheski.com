import fs from "fs";
import path from "path";

import sizeOf from "image-size";

const GALLERY_DATA_PATH: string = "./public/static/gallery/";
const GALLERY_STATIC_DATA_PATH: string = "/static/gallery/";

interface Size {
  height: number;
  width: number;
}
export type PhotoPath = {
  path: string;
  size: Size;
  slug: string;
};

type PhotoPaths = PhotoPath[];

const makeFullPath = (photoName: string) => {
  return `${GALLERY_DATA_PATH}${photoName}`;
};
const makeStaticPath = (photoName: string) => {
  return `${GALLERY_STATIC_DATA_PATH}${photoName}`;
};

const getGallerySize = (): number => {
  const data = fs.readdirSync(GALLERY_DATA_PATH);
  return data.length;
};

const getSizes = (image: string): Size => {
  const size = sizeOf(image);
  const height = size.height;
  const width = size.width;
  if (height && width) {
    return { height, width };
  }
  return { height: 0, width: 0 };
};

export const sortByDate = (firstFile: string, secondFile: string): number => {
  const firstFileStats = fs.statSync(makeFullPath(firstFile));
  const secondFileStats = fs.statSync(makeFullPath(secondFile));
  const firstDate = new Date(firstFileStats.birthtime);
  const secondDate = new Date(secondFileStats.birthtime);
  return secondDate.getTime() - firstDate.getTime();
};

const sortByDateName = (firstFile: string, secondFile: string): number => {
  const firstDate = new Date(
    parseInt(firstFile.slice(1, 4)),
    parseInt(firstFile.slice(4, 6)),
    parseInt(firstFile.slice(6, 8))
  );
  const secondDate = new Date(
    parseInt(secondFile.slice(1, 4)),
    parseInt(secondFile.slice(4, 6)),
    parseInt(secondFile.slice(6, 8))
  );
  return secondDate.getTime() - firstDate.getTime();
};

export const getGalleryQuery = (
  start: number,
  numberOfPictures: number,
  allPhotos: boolean = false
): PhotoPaths => {
  const data = fs.readdirSync(GALLERY_DATA_PATH);
  const photoList = data.sort(sortByDateName).map((filePath) => {
    const fileName = path.parse(filePath).name;
    return {
      path: makeStaticPath(filePath),
      size: getSizes(makeFullPath(filePath)),
      slug: String(fileName),
    };
  });

  if (allPhotos) {
    return photoList;
  }
  const gallerySize = getGallerySize();
  if (start > gallerySize) {
    return [];
  }
  const endIndex =
    start + numberOfPictures > gallerySize
      ? gallerySize
      : start + numberOfPictures;

  return photoList.slice(start, endIndex);
};
