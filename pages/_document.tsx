import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="../public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Todos showcase app next js static"
          />
          <link rel="apple-touch-icon" href="../public/logo192.png" />
          <title>Todos - static next js</title>
        </Head>
      <body>
        <Main />
      <NextScript />
      </body>
      </Html>
    )
  }
}

export default MyDocument
