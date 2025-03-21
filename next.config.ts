import { withContentCollections } from "@content-collections/next";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({});

export default withContentCollections(withMDX(nextConfig));
