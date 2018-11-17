import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import withGA from 'next-ga';
import settings from '../settings.json';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>{settings.meta.pageTitle}</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA('UA-111730698-1', Router)(MyApp);
