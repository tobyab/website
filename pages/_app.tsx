import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import Meta from "../components/meta";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <Component {...pageProps} />
      <Meta />
      <Analytics />
    </AnimatePresence>
  );
}

export default MyApp;
