import { allPosts, Post } from "content-collections";
import { format, parseISO, compareDesc } from "date-fns";
import Image from "next/image";

import Link from "next/link";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold mb-6">My Personal Blog</h1>
      <p className="text-xl mb-12">
        Sometimes I write stuff sometimes I don&apos;t.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {posts.map((post, index) => {
          const priority = index < 6;
          return <BlogPost key={index} post={post} priority={priority} />;
        })}
      </div>
    </div>
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
        <h2 className="mt-4 text-2xl font-bold group-hover:text-gray-300">
          {post.title}
        </h2>
        <p className="mt-2 text-base">{post.summary}</p>
        <p className="mt-1 text-sm text-gray-400">
          {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
        </p>
      </Link>
    </div>
  );
};
