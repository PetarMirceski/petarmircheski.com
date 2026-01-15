import { allPosts } from "content-collections";
import { url } from "@/config/url";

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `${url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/blog", "/music", "/photos"].map((route) => ({
    url: `${url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
