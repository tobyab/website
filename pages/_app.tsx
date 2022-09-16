import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import splitbee from "@splitbee/web"
import CmdK from "../components/cmdk"

function MyApp({ session, Component, pageProps }) {
  splitbee.init({
    token: process.env.SPLITBEE_TOKEN
  })
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
      <CmdK/>
    </SessionProvider>
    );
  }

export default MyApp
