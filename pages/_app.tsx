import "../styles/globals.css"
import splitbee from "@splitbee/web"

import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import type { Session } from "next-auth"

function MyApp({
                   Component,
                   pageProps: { session, ...pageProps },
               }: AppProps<{ session: Session }>) {
  splitbee.init({
    token: process.env.SPLITBEE_TOKEN
  })
  return (
      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
  );
}

export default MyApp
