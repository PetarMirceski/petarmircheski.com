import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
    heading: 'Roboto',
    body: 'Roboto',
  },
};

// NOTE: For some reason you have to unpack the fonts object
export const theme = extendTheme({ ...fonts, config, styles });
