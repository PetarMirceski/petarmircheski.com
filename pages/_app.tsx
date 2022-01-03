import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { AppProps } from 'next/app';

const customTheme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#ebdfce', 'black')(props),
    },
  }),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ customTheme, styles })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
