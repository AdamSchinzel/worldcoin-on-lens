import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A TypeScript starter for Next.js." />
      </Head>
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
