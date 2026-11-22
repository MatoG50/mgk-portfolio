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
    mono: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,
  },
  colors: {
    brand: {
      canvas: '#07080D',
      surface: '#0F121B',
      elevated: '#151926',
      cyan: '#22D3EE',
      indigo: '#818CF8',
      emerald: '#34D399',
      amber: '#F59E0B',
      rose: '#FB7185',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#07080D',
        color: '#F8FAFC',
      },
    },
  },
});

export default theme;
