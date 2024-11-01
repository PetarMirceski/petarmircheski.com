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
  const  slug  = (await params).slug;

  let post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let ogImage = post.image
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
  const slug  = (await params).slug

  const post = allPosts.find((post) => post.slug === decodeURI(slug));

  if (!post) notFound();

  const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Image: (props) => (
      <Image
        alt="blog"
        className="my-4"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        {...props}
      />
    ),
    p: ({ children }) => <p className="text-gray-300 my-4"> {children}</p>,
    h1: ({ children }) => <h1 className="text-4xl my-4"> {children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl my-4"> {children}</h2>,
    h3: ({ children }) => <h2 className="text-2xl my-4"> {children}</h2>,
    ul: (props: any) => {
      return (
        <ul className="list-disc list-inside text-gray-300" {...props}>
          {props.children}
        </ul>
      );
    },
    ol: (props: any) => {
      return (
        <ol className="list-decimal list-inside text-gray-300" {...props}>
          {props.children}
        </ol>
      );
    },
  };

  return (
    <article className="container max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-5">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              alt="Author's avatar"
              className="w-15 h-15 rounded-full"
              src="/images/newer_profile.jpg"
              height={50}
              width={50}
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
          className="w-full h-auto rounded-lg"
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
        <MDXContent code={post.mdx} components={mdxComponents} />
      </section>
    </article>
  );
}
