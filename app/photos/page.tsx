import { PhotoGallery } from "@/components/PhotoGallery";

export const revalidate = 3600;

interface PicRequest {
  secret: string;
  id: string;
  server: string;
}

type Sizes =
  | "Square"
  | "Large Square"
  | "Thumbnail"
  | "Small"
  | "Small 320"
  | "Small 400"
  | "Medium"
  | "Medium 640"
  | "Medium 800"
  | "Large"
  | "Large 1600"
  | "Large 2048"
  | "Original";

interface FlickrImageSize {
  label: Sizes;
  width: number;
  height: number;
  source: string;
  url: string;
  media: string;
}

const FLICKR_API_KEY = process.env.API_KEY;
const FLICKR_USER_ID = process.env.FLICKR_ID;

if (!FLICKR_API_KEY || !FLICKR_USER_ID) {
  throw new Error("The API key or User ID for Flickr is missing");
}

const fetchPhotoSizes = async (photoId: string) => {
  const sizeUrl = new URL("https://www.flickr.com/services/rest/");

  sizeUrl.search = new URLSearchParams({
    method: "flickr.photos.getSizes",
    api_key: FLICKR_API_KEY,
    photo_id: photoId,
    format: "json",
    nojsoncallback: "1",
  }).toString();

  const sizeResponse = await fetch(sizeUrl.toString());
  if (!sizeResponse.ok) {
    throw new Error(
      `Failed to fetch sizes for photo ID ${photoId}. Status: ${sizeResponse.status}`,
    );
  }
  const sizeData = await sizeResponse.json();

  // Try to fetch a smaller size image.
  const selectedSizeSmall =
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Medium 640",
    ) ||
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Medium",
    ) ||
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Small 400",
    );

  const selectedSizeLarge =
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Large",
    ) ||
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Medium 800",
    ) ||
    sizeData.sizes.size.find(
      (image: FlickrImageSize) => image.label === "Medium 640",
    );

  if (!selectedSizeSmall || !selectedSizeLarge) {
    throw new Error(
      `Photo ID ${photoId} does not have a suitable small size image.`,
    );
  }

  return [
    {
      src: selectedSizeSmall.source,
      width: selectedSizeSmall.width,
      height: selectedSizeSmall.height,
    },
    {
      src: selectedSizeLarge.source,
      width: selectedSizeLarge.width,
      height: selectedSizeLarge.height,
    },
  ];
};

const fetchPhotos = async () => {
  const apiUrl = new URL("https://www.flickr.com/services/rest/");
  apiUrl.search = new URLSearchParams({
    method: "flickr.people.getPhotos",
    api_key: FLICKR_API_KEY,
    user_id: FLICKR_USER_ID,
    format: "json",
    nojsoncallback: "1",
  }).toString();

  const response = await fetch(apiUrl.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch photos. Status: ${response.status}`);
  }
  const data = await response.json();

  // Use Promise.allSettled so that errors in individual photos don't break the batch.
  const results = await Promise.allSettled(
    data.photos.photo.map(async (pic: PicRequest) => {
      try {
        const [photoSizesSmall, photoSizesLarge] = await fetchPhotoSizes(
          pic.id,
        );

        return [
          {
            id: pic.id,
            ...photoSizesSmall,
          },
          {
            id: pic.id,
            ...photoSizesLarge,
          },
        ];
      } catch (error) {
        console.error(
          `Error fetching photo data for photo ID ${pic.id}:`,
          error,
        );
        return null;
      }
    }),
  );

  // Filter out any null results and return only the successful photos.
  type PhotoOut = {
    id: string;
    src: string;
    width: number;
    height: number;
  };
  const photos = results
    .filter(
      (result): result is PromiseFulfilledResult<[PhotoOut, PhotoOut]> =>
        result.status === "fulfilled" && result.value !== null,
    )
    .map((result) => result.value);

  return photos;
};

const fetchData = async () => {
  try {
    const photos = await fetchPhotos();
    return photos;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function Photos() {
  const photos = await fetchData();

  const smallPhotos = photos.map(([small, _]) => {
    return small;
  });

  const largePhotos = photos.map(([_, large]) => {
    return large;
  });

  return <PhotoGallery galeryPhotos={smallPhotos} slidePhotos={largePhotos} />;
}
