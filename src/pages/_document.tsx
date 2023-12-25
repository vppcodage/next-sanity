import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <body className="cursor-dot">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
