import "styles/prism.css";
import "styles/globals.css";
import "@fontsource/roboto/400.css";

import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "components/Footer";
import { Navbar } from "components/Header";
import { MDXcomponents } from "components/MDXcomponents";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <MDXProvider components={MDXcomponents}>
            <Navbar />
            <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
              <Component {...pageProps} />
              <Footer />
            </Box>
          </MDXProvider>
        </AnimatePresence>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
