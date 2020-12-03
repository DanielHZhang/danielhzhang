import 'src/styles/normalize.css';
import 'src/styles/global.css';
import React, {Fragment} from 'react';
import {AppProps} from 'next/app';
import {Cursor} from 'src/components/cursor';
import {GlobalCss} from 'src/components/global';
import {Title} from 'src/components/title';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Fragment>
      <Title />
      <GlobalCss />
      <Component {...pageProps} />
      <Cursor />
    </Fragment>
  );
}
