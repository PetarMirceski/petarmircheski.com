import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface Meta {
  description?: string;
  type?: string;
  title?: string;
  publishedAt?: string;
  image?: string;
}
interface ChildrenProps {
  meta?: Meta;
}

export const BlogHead: FC<PropsWithChildren<ChildrenProps>> = ({
  children,
  meta,
}) => {
  const customMeta = {
    title: "Petar Mircheski",
    description: `Researcher, creator, developer`,
    type: "website",
    image: "https://www.petarmircheski.com/banners/banner.png",
    ...meta,
  };

  return (
    <>
      <Head>
        <title>{customMeta?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={customMeta?.description} name="description" />
        <meta property="og:type" content={customMeta?.type} />
        <meta property="og:site_name" content="Petar Mircheski" />
        <meta property="og:description" content={customMeta?.description} />
        <meta property="og:title" content={customMeta?.title} />
        <meta property="og:image" content={customMeta.image} />{" "}
        {customMeta?.publishedAt && (
          <meta
            property="article:published_time"
            content={customMeta.publishedAt}
          />
        )}
      </Head>
      {children}
    </>
  );
};
