import { allPosts } from "content-collections";

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://petarmircheski.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog", "/music", "/photos"].map((route) => ({
    url: `https://petarmircheski.com${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
