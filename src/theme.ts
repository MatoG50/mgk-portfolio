import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  },
  colors: {
    brand: {
      black: '#060608',
      card: '#0d0d12',
      cyan: '#00f2fe',
      purple: '#7f00ff',
      emerald: '#10b981',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#060608',
        color: '#f8fafc',
      },
    },
  },
});

export default theme;
