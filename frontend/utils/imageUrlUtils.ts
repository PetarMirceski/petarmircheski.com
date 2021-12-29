export const addBaseUrlToImage = (url: string) => {
  // NOTE: this gets executed on the frontend you can not import the config from the static file
  return process.env.NEXT_PUBLIC_API_URL + url;
};
