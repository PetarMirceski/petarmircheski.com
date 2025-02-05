import { allPosts, Post } from "content-collections";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";

import Link from "next/link";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <section className="max-w-7xl mx-auto container px-10">
      <h1 className="font-bold">My Personal Blog</h1>
      <p className="font-semibold mb-10">
        Sometimes I write stuff sometimes I don&apos;t.
      </p>
      <div className="grid gap-8 lg:grid-cols-3">
        {posts.map((post, index) => {
          const priority = index < 6;
          return <BlogPost key={index} post={post} priority={priority} />;
        })}
      </div>
    </section>
  );
}

interface BlogPostProps {
  post: Post;
  priority?: boolean;
}

const BlogPost = ({ post, priority = false }: BlogPostProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link className="group " href={`/blog/${post.slug}`}>
        <Image
          alt={post.title}
          className="rounded-lg"
          src={post.image}
          priority={priority}
          style={{
            aspectRatio: "450/300",
            objectFit: "cover",
          }}
          width="450"
          height="300"
        />
        <h4 className="mt-4 font-bold group-hover:text-gray-300">
          {post.title}
        </h4>
        <p>{post.summary}</p>
        <p className="text-sm text-gray-400">
          {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
        </p>
      </Link>
    </div>
  );
};
