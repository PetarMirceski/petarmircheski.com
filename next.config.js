const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(
  withContentlayer({
    swcMinify: true,
    reactStrictMode: true,
    images: {
      domains: ["img.youtube.com", "live.staticflickr.com"],
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  })
);
