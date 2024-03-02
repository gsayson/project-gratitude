"use client"

import {signIn} from "next-auth/react"

export function SignIn() {
  return <p onClick={() => signIn("google")}>Sign in</p>
}