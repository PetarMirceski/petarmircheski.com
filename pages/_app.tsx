import 'styles/prism.css';

import { Box, Container } from '@chakra-ui/react';
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Navbar } from 'components/Header';
import { LorenzSpinner } from 'components/ThreeScene';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { NextRouter } from 'next/router';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#ebdfce', 'black')(props),
    },
  }),
};

const fonts = {
  fonts: {
    body: 'Roboto',
  },
};

const ClientScene = dynamic(() => import('components/ThreeScene'), {
  ssr: false,
  loading: () => <LorenzSpinner />,
});
const isErrorOrQuery = (router: NextRouter) => {
  if (router.query?.slug) {
    return true;
  }
  if (router.route === '/404') {
    return true;
  }
  return false;
};
function MyApp({ Component, pageProps, router }: AppProps) {
  const hideState = isErrorOrQuery(router);
  return (
    <ChakraProvider theme={extendTheme({ config, styles, fonts })}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Box as="main" pb={8}>
          <Navbar />
          <Container maxW="container.xl" pt={14}>
            {!hideState && <ClientScene />}
          </Container>
          <Component {...pageProps} />
        </Box>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
