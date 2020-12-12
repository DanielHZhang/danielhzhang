import 'src/styles/normalize.css';
import 'src/styles/global.css';
import React, {Fragment} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {AnimatePresence, motion, Variants} from 'framer-motion';
import {Cursor} from 'src/components/cursor';
import {HeadTitle} from 'src/components/title';

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
          href='https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <AnimatePresence exitBeforeEnter={true}>
        <motion.div
          key={router.route}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageVariants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Cursor />
    </Fragment>
  );
}
