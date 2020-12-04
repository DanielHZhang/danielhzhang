import 'src/styles/normalize.css';
import 'src/styles/global.css';
import React, {Fragment} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {Cursor} from 'src/components/cursor';
import {HeadTitle} from 'src/components/title';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Fragment>
      <HeadTitle />
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
      <Cursor />
    </Fragment>
  );
}
