import { Box, Container } from '@chakra-ui/react';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Header';
import { LorenzSpinner } from 'components/ThreeScene';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

const ClientScene = dynamic(() => import('components/ThreeScene'), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});

interface Meta {
  description?: string;
  type?: string;
  title?: string;
  publishedAt?: string;
  image?: string;
}
interface ChildrenProps {
  showScene?: boolean;
  meta?: Meta;
}
export const Layout: FC<PropsWithChildren<ChildrenProps>> = ({
  children,
  showScene = true,
  meta,
}) => {
  const customMeta = {
    title: 'Petar Mircheski',
    description: `Researcher, creator, developer`,
    type: 'website',
    image: 'https://www.petarmircheski.com/banners/banner.png',
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
        <meta property="og:image" content={customMeta.image} />
        {customMeta?.publishedAt && (
          <meta
            property="article:published_time"
            content={customMeta.publishedAt}
          />
        )}
      </Head>

      <Box as="main" pb={8}>
        <Navbar />
        <Container maxW="container.xl" pt={14}>
          {showScene && <ClientScene />}
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};
