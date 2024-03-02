import Image from "next/image"
import {PLeftArrow} from "@/components/icons"
import {auth} from "@/common/auth"
import {SignIn} from "@/components/auth-components"

export async function Header() {
  const session = await auth()
  return (
      <header className="w-screen px-1 py-2 md:px-2 md:py-4 bg-zinc-950 flex justify-between border-b-2 border-b-zinc-800 items-center">
        <div className="x-space-2">
          <a className="mx-2">Welcome, {session?.user?.name}!</a>
          <a className="mx-2">Write</a>
        </div>
        <div>
          <SignIn/>
        </div>
      </header>
  )
}

export function Footer() {
  return (
      <header className="w-screen px-1 py-2 md:px-2 md:py-4 flex justify-between">
        <div className="w-screen flex justify-center x-space-4 items-center">
          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://gsn.bz"
              target="_blank"
              rel="noopener noreferrer"
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
      </header>
  )
}