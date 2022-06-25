import React from 'react';
import Head from '@docusaurus/Head';
import { Redirect } from '@docusaurus/router';

export default function Index() {
  return (
    <>
      <Head>
        <meta property="title" content="myBot Documentation" />
        <meta property="og:title" content="myBot Documentation" />
        <meta property="image" content="https://mybot.host/img/gfx/logo.png" />
        <meta property="og:image" content="https://mybot.host/img/gfx/logo.png" />
      </Head>

      <Redirect to="/docs/" />
    </>
  );
}