import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { NextComponentType, NextPageContext } from 'next';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Header from '../components/Header';

// import Header from '../components/Header';
import store from '../store';

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <div className='root'>
      <Head>
        <title>Kalles Shopify</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Estonia&family=Mulish:wght@400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div>FOOTER</div>
      </Provider>
    </div>
  );
}

// Reset default browser styling
const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;

  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: 100vh;
  }
`;
