const { withContentlayer } = require("next-contentlayer");

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

module.exports = withContentlayer(nextConfig);

// domains: ["img.youtube.com", "live.staticflickr.com"],
