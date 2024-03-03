import Image from "next/image"
import {PLeftArrow} from "@/components/icons"
import {auth} from "@/lib/auth"
import {AuthManagementComponent} from "@/components/auth-components"
import Link from "next/link"

export async function Header() {
  const session = await auth()
  return (
      <header className="w-screen px-1 py-2 md:px-2 md:py-4 bg-zinc-950 flex justify-between border-b-2 border-b-zinc-800 items-center">
        <div className="x-space-2">
          <Link className="mx-2 hover:cursor-pointer border-b border-b-zinc-700 hover:border-b-white transition" href="/">home</Link>
          <a className="mx-2 hover:cursor-pointer border-b border-b-zinc-700 hover:border-b-white transition" href="https://gsn.bz">gsn.bz</a>
        </div>
        <div className="mr-4 hover:cursor-pointer border-b border-b-zinc-700 hover:border-b-white transition">
          <AuthManagementComponent loggedIn={session != null}/>
        </div>
      </header>
  )
}

export function Footer() {
  return (
      <footer className="w-screen px-1 py-2 md:px-2 md:py-4 flex justify-between">
        <div className="w-screen flex justify-center x-space-4 items-center">
          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://gsn.bz"
          >
            <Image
                src="/gsn.svg"
                alt="GSN"
                className="invert mr-3 md:mr-4"
                width={64}
                height={64}
                priority
            />
          </a>
          <div className="flex-col justify-center items-center">
            <p>Copyright (C) Gerard Sayson 2024. All rights reserved.</p>
            <p className="flex items-center"><PLeftArrow/>&nbsp;click to see my website</p>
          </div>
        </div>
      </footer>
  )
}