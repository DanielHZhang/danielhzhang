import {ChakraProvider} from '@chakra-ui/react';
import {AnimatePresence, Variants} from 'framer-motion';
import 'modern-normalize/modern-normalize.css';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React, {Fragment} from 'react';
import {Cursor} from 'src/components/cursor';
import {HeadTitle} from 'src/components/title';
import 'src/styles/global.css';
import theme from 'src/styles/theme';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function App({Component, pageProps, router}: AppProps): JSX.Element {
  return (
    <Fragment>
      <HeadTitle />
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter={true}>
          {/* <motion.div
            key={router.route}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={pageVariants}
          > */}
          <Component {...pageProps} />
          {/* </motion.div> */}
        </AnimatePresence>
        <Cursor />
      </ChakraProvider>
    </Fragment>
  );
}
