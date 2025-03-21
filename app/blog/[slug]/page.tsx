import { allPosts } from "content-collections";
import type { Metadata } from "next";

import { MDXContent } from "@content-collections/mdx/react";
import type { MDXComponents } from "mdx/types";

import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

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

  const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: (props) => (
      <Image
        alt="blog"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        {...props}
      />
    ),
  };

  return (
    <article className="container mx-auto max-w-3xl">
      <header className="mb-6">
        <h1 className="mb-5 text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              alt="Author's avatar"
              className="h-24 w-20 rounded-full"
              src="/images/newer_profile.jpg"
              height={80}
              width={80}
            />
            <div className="ml-3">
              <p className="text-sm font-semibold">Mircheski Petar</p>
              <p className="text-sm text-gray-500">
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{post.readingTime.text}</p>
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
          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>
      </section>
    </article>
  );
}
