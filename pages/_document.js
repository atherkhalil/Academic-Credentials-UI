import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <body
          style={{
            backgroundImage:
              "url(../images/background-texture.png)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "2184px 996px, 100% 100%",
            backgroundPosition: "center top, center top",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
