import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export const posts = defineCollection({
  name: "Post",
  directory: "/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    publishedAt: z.string().date(),
    summary: z.string(),
    image: z.string(),
  }),
  transform: async (doc, context) => {
    const mdx = await compileMDX(context, doc, {
      rehypePlugins: [
        rehypeAutolinkHeadings,
        rehypeCodeTitles,
        rehypeSlug,
        rehypePrism,
        rehypeKatex,
      ],
      remarkPlugins: [remarkGfm, remarkMath],
    });
    return {
      ...doc,
      mdx,
      url: doc._meta.filePath,
      slug: doc._meta.fileName.replace(/\.mdx$/, ""),
      readingTime: readingTime(doc.content).text,
      wordCount: doc.content.split(/\s+/).length,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
