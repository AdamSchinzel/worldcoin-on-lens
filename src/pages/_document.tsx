import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Find out which people have World ID verified on Lens." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://worlcoin-on-lens.vercel.app/" />
        <meta property="twitter:title" content="Worldcoin on Lens" />
        <meta property="twitter:description" content="Find out which people have World ID verified on Lens." />
        <meta property="twitter:image" content="/static/twitter-image.png" />
        <meta property="twitter:image:alt" content="Worldcoin on Lens banner" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
