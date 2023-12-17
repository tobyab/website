import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import Meta from "../components/meta";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { Toaster } from "sonner";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <SessionProvider session={session}>
        <Toaster position="top-right" />
        <Component {...pageProps} />
        <Meta />
        <Analytics />
      </SessionProvider>
    </AnimatePresence>
  );
}

export default MyApp;
