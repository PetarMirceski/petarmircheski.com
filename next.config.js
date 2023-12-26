const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com", "live.staticflickr.com"],
  },
};

module.exports = withContentlayer(nextConfig);
