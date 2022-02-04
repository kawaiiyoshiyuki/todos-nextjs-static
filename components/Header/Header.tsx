import Head from 'next/head';
import React from 'react';

const Header = () => (
  <>
    <Head>
      <title>Todos app</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="App-header">
      <h1>Todos</h1>
    </header>
  </>
);

export default Header;
