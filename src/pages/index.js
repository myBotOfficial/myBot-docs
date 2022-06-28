import React from 'react';
import Head from '@docusaurus/Head';
import { Redirect } from '@docusaurus/router';

export default function Index() {
  return (
    <>
      <Head>
        <meta property="title" content="About Us | myBot" />
        <meta property="og:title" content="About Us | myBot" />
        <meta property="description" content="Welcome to the official myBot documentation!" />
        <meta property="og:description" content="Welcome to the official myBot documentation!" />
      </Head>

      <Redirect to="/docs/" />
    </>
  );
}