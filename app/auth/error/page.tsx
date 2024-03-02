"use client"

import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowUpRight} from "@phosphor-icons/react";
import {signIn} from "next-auth/react";

export default function ErrorPage() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl mb-2">Authentication failed</h1>
      <p className="mb-4">Please ensure that you are using the correct account.</p>
      <p className="text-zinc-500 mb-3">error code: <span className="font-mono">{useSearchParams().get("error")}</span><br/>
      contact geruls@broskiclan.org for support with this code</p>
      <div className="md:flex">
        <Link href="/" className="md:mr-2 flex items-center border-b border-b-zinc-700 hover:border-b-white hover:text-white transition">back home <ArrowUpRight/></Link>
        <p onClick={() => signIn("google")} className="hover:cursor-pointer flex items-center border-b border-b-zinc-700 hover:border-b-white hover:text-white transition">sign in again <ArrowUpRight/></p>
      </div>
    </main>
  )
}