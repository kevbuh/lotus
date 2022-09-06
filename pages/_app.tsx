import "../styles/globals.css"; // dont delete, this loads in tailwind css
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Lotus Foundation</title>
        <meta
          name="Boulder Based Non-Profit"
          content="The Lotus Foundation"
          key="desc"
        />
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
