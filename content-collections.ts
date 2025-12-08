import {
  createDefaultImport,
  defineCollection,
  defineConfig,
} from "@content-collections/core";
import type { MDXContent } from "mdx/types";
import { z } from "zod";

export const posts = defineCollection({
  name: "Post",
  directory: "/posts",
  include: "**/*.mdx",
  parser: "frontmatter-only",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string().date(),
    summary: z.string(),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
  transform: ({ _meta, ...post }) => {
    const mdxContent = createDefaultImport<MDXContent>(
      `@/posts/${_meta.filePath}`,
    );
    return {
      ...post,
      mdxContent,
      slug: _meta.fileName.replace(/\.mdx$/, ""),
    };
  },
});

export default defineConfig({
  collections: [posts],
});
