import 'src/styles/normalize.css';
import 'src/styles/global.css';
import React from 'react';
import {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
