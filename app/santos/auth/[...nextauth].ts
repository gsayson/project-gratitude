import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export default NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if(account!.provider === "google") {
        return profile!.email!.endsWith("@students.edu.sg")
      }
      return false
    },
  }
})