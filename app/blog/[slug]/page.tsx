import { allPosts } from "content-collections";
import { format, parseISO } from "date-fns";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  // Destructure slug to ensure params is available synchronously
  const slug = (await params).slug;

  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const ogImage = post.image
    ? `https://petarmircheski.com${post.image}`
    : `https://petarmircheski.com/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://petarmircheski.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = allPosts.find((post) => post.slug === decodeURI(slug));

  if (!post) notFound();

  const MdxContent = post.mdxContent;

  return (
    <article className="container mx-auto max-w-3xl px-5">
      <header className="mb-6">
        <h1 className="mb-5 font-bold text-4xl">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <Image
              alt="Author's avatar"
              className="h-24 w-20 rounded-full"
              src="/images/profile.jpeg"
              height={80}
              width={80}
            /> */}
            <div className="ml-3">
              <p className="font-semibold text-sm">Mircheski Petar</p>
              <p className="text-gray-500 text-sm">
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>
          {/* <p className="text-sm text-gray-500">{post.readingTime}</p> */}
        </div>
      </header>
      <figure className="mb-6">
        <Image
          alt="blog image"
          className="h-auto w-full rounded-lg"
          height="400"
          src={post.image}
          style={{
            aspectRatio: "800/400",
            objectFit: "cover",
          }}
          width="800"
        />
      </figure>
      <section className="mb-6">
        <article className="prose max-w-none">
          <MdxContent />
        </article>
      </section>
    </article>
  );
}
