import { PhotoGallery } from "@/components/photoGallery";

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

const fetchData = async () => {
  const API_URL = `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${process.env.API_KEY}&user_id=199085309%40N08&format=json&nojsoncallback=1`;

  const fetchPhotoSizes = async (photoId: string) => {
    try {
      const sizeUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${process.env.API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;
      const sizeResponse = await fetch(sizeUrl);
      const sizeData = await sizeResponse.json();

      const selectedSize = sizeData.sizes.size.find(
        (image: FlickrImageSize) => image.label === "Medium 800",
      );

      return {
        src: selectedSize.source,
        width: selectedSize.width,
        height: selectedSize.height,
      };
    } catch (error) {
      console.error(
        `Error fetching photo sizes for photo ID ${photoId}:`,
        error,
      );
      throw error;
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const data = await response.json();

      const picData = await Promise.all(
        data.photos.photo.map(async (pic: PicRequest) => {
          try {
            const photoSizes = await fetchPhotoSizes(pic.id);
            return {
              id: pic.id,
              src: photoSizes.src,
              width: photoSizes.width,
              height: photoSizes.height,
            };
          } catch (error) {
            // Handle errors for individual photos
            console.error(
              `Error fetching photo data for photo ID ${pic.id}:`,
              error,
            );
            return null; // Return null for the photo with an error
          }
        }),
      );

      // Filter out photos with errors
      const filteredPicData = picData.filter((pic) => pic !== null);

      return filteredPicData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const photos = await fetchPhotos();
  return photos;
};

export default async function Photos() {
  const photos = await fetchData();
  return <PhotoGallery photos={photos} />;
}
