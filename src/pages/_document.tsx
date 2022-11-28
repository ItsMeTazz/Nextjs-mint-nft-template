import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Satoshi-Variable.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        </Head>
        <body className='bg-gradient-to-b from-[#0D1824] to-[#0B111A]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
