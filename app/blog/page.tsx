import { allPosts, type Post } from "content-collections";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <Section
      title={"My Personal Blog"}
      subTitle={"Sometimes I write stuff sometimes I don't."}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          const priority = index < 6;
          if (post.draft) {
            return null;
          }
          return <BlogPost key={index} post={post} priority={priority} />;
        })}
      </div>
    </Section>
  );
}

interface BlogPostProps {
  post: Post;
  priority?: boolean;
}

const BlogPost = ({ post, priority = false }: BlogPostProps) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border p-4 transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="overflow-hidden rounded-xl">
          <Image
            alt={post.title}
            src={post.image}
            priority={priority}
            width={450}
            height={300}
            style={{
              aspectRatio: "450 / 300",
              objectFit: "cover",
            }}
          />
        </div>
        <h4 className="mt-4 font-semibold text-lg group-hover:text-indigo-500">
          {post.title}
        </h4>
        <p className="mt-2 text-gray-600 text-sm">{post.summary}</p>
        <p className="mt-3 text-gray-500 text-xs">
          {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
        </p>
      </Link>
    </div>
  );
};
