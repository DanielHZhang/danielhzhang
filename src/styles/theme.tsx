import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '24em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

// --font-text: 'Inter';
// --font-code: 'Inconsolata';
// --font-heading: 'Playfair Display';
// --font-subheading: 'Josefin Sans';
// --font-color-link: #dac9a6;
// --font-color-heading-primary: #fcfaf2;
// --font-color-heading-secondary: #dac9a6;
// --font-color-heading-tertiary: #9e7a7a;
// --font-color-primary: #bdc0ba;
// --background-primary: #111111;

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
