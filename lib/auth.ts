import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
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
    async signIn({profile }) {
      return (profile!.email!.endsWith("@students.edu.sg") && profile!.name!.endsWith("(Punggolss)")) || profile!.email!.endsWith("@moe.edu.sg")
    },
  },
  pages: {
    error: "/auth/error"
  }
})

export enum AccountType {
  Student,
  Teacher,
  NoSession
}

export async function accountType(): Promise<AccountType> {
  const x = await auth()
  if(x == null) return AccountType.NoSession
  if(x.user!.email!.endsWith("@students.edu.sg")) return AccountType.Student
  else return AccountType.Teacher
}