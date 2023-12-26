import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  let blogs = allPosts.map((post) => ({
    url: `https://petarmircheski.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  let routes = ["", "/blog", "/music", "/photos"].map((route) => ({
    url: `https://petarmircheski.com${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
