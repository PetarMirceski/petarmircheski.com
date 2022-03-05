import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

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

export const Layout: FC<PropsWithChildren<ChildrenProps>> = ({
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

      <Container maxW="container.xl">
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          <Flex
            bg={useColorModeValue("white", "black")}
            w="full"
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
          >
            {children}
          </Flex>
        </motion.article>
      </Container>
      <Footer />
    </>
  );
};
