import 'src/styles/normalize.css';
import 'src/styles/global.css';
import React, {Fragment} from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {Cursor} from 'src/components/cursor';
import {GlobalCss} from 'src/components/global';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Daniel Zhang</title>
      </Head>
      <GlobalCss />
      <Component {...pageProps} />
      <Cursor />
    </Fragment>
  );
}
