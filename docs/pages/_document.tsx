import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <title>W-design UI toolkit | react typescript</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/algolia-min.css"
          integrity="sha256-nkldBwBn2NQqRL1mod7BqHsJ6cEOn6u/ln6F/lI4CFo="
          crossOrigin="anonymous"
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
