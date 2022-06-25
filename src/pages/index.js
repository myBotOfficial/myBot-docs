import React from 'react';
import Head from '@docusaurus/Head';
import { Redirect } from '@docusaurus/router';

export default function Index() {
  return (
    <>
      <Head>
        <meta name="title" content="myBot Documentation" />
        <meta name="image" content="https://mybot.host/img/gfx/logo.png" />
      </Head>

      <Redirect to="/docs/" />
    </>
  );
}