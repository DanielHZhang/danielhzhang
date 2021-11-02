import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '24em',
  md: '36em',
  lg: '48em',
  xl: '72em',
});

const theme = extendTheme({
  breakpoints,
  colors: {
    black: '#202324',
    'blue.100': '#81C7D4',
    // black: '#111111',
    gold: '#dac9a6',
    white: '#fcfaf2',
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Josefin Sans',
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Inter',
      },
    },
  },
});

export default theme;
