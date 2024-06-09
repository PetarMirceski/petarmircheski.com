const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        port: "",
      },
    ],
  },
};

module.exports = withContentCollections(nextConfig);

// domains: ["img.youtube.com", "live.staticflickr.com"],
