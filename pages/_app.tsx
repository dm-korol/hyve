import * as React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useEffect } from 'react';
import { Theme } from '../src/components';
import store from '../src/store';

const cache = createCache({ key: 'css' });
cache.compat = true;

function MyApp(props: { Component: any; pageProps: any }) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Provider store={store}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
