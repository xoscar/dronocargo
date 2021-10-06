import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import store from '../configureStore';
import Layout from './_layout';
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
