import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWTTR_CLIENT_ID,
      clientSecret: process.env.TWTTR_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
})
