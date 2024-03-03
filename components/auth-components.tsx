"use client"

import {signIn, signOut} from "next-auth/react"

export function AuthManagementComponent(props: { loggedIn: boolean }) {
  return !props.loggedIn ? <p onClick={() => signIn("google")}>Sign in</p> :
      <p onClick={() => signOut()}>Sign out</p>
}