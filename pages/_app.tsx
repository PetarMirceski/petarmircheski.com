import 'styles/prism.css';

import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { AppProps } from 'next/app';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ config, styles, fonts })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
