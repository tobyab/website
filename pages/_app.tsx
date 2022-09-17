import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import splitbee from "@splitbee/web"

function MyApp({ session, Component, pageProps }) {
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
