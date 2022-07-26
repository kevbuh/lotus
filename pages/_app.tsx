import "../styles/globals.css"; // dont delete, this loads in tailwind css
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
