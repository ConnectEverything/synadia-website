import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import settings from '../settings.json';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="description" content={settings.meta.pageDescription} />
          <meta name="subject" content={settings.meta.pageSubject} />
          <link rel="canonical" href={settings.meta.canonicalUrl} />
          <meta name="referrer" content="no-referrer" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-dns-prefetch-control" content="off" />
          <meta httpEquiv="Window-Target" content="_value" />
          <meta
            name="google-site-verification"
            content={settings.meta.googleSiteVerification}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color={settings.colors.secondary}
          />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta
            name="msapplication-TileColor"
            content={settings.colors.primary}
          />
          <meta
            name="msapplication-config"
            content="/static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content={settings.colors.primary} />
          <meta
            name="msapplication-TileColor"
            content={settings.colors.tertiary}
          />
          <meta name="theme-color" content={settings.colors.primary} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={settings.meta.pageTitle} />
          <meta
            property="og:description"
            content={settings.meta.pageDescription}
          />
          <meta property="og:url" content={settings.meta.pageUrl} />
          <meta property="og:site_name" content={settings.meta.siteName} />
          <meta property="og:image" content="/static/OG.jpg" />
          <meta property="og:image:secure_url" content="/static/OG.jpg" />
          <meta name="twitter:card" content="summary" />

          <meta
            name="twitter:description"
            content={settings.meta.pageDescription}
          />

          <meta name="twitter:title" content={settings.meta.pageTitle} />
          <meta name="twitter:site" content={settings.meta.twitterUserName} />
          <meta name="twitter:image" content="/static/og-image.png" />
          <meta name="twitter:creator" content={settings.meta.twitterCreator} />

          <link rel="stylesheet" href="../static/aos.css" />
          <link rel="stylesheet" href="../static/global.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
