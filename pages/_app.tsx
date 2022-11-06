import "../styles/globals.css"
import { Analytics } from '@vercel/analytics/react';

import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import type { Session } from "next-auth"

function MyApp({
                   Component,
                   pageProps: { session, ...pageProps },
               }: AppProps<{ session: Session }>) {

  return (
      <SessionProvider session={session}>
        <Component {...pageProps}/>
          <Analytics />
      </SessionProvider>
  );
}

export default MyApp
