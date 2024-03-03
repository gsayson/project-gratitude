import {accountType, auth} from "@/lib/auth"
import {notFound} from "next/navigation"
import {sql} from "@vercel/postgres"
import {PGMessage} from "@/lib/types"
import {PostForm} from "@/components/form-components"

export default async function Post() {
  const session = await auth()
  if(session == null) {
    notFound()
  } else {
    const email = session!.user!.email!
    const { rows } = await sql`SELECT * FROM RESPONSES WHERE email=${email}`
    const singletonArray = rows.map(x => x as PGMessage)
    const acc = await accountType()
    const message: PGMessage = singletonArray.length == 1 ? singletonArray[0] : {
      nickname: "",
      email,
      clazz: "",
      response: ""
    }
    return (
        <main className="w-screen h-screen flex justify-center">
          <div className="max-w-2xl md:mt-6 lg:mt-8 xl:mt-16 mt-2 p-4">
            <p>Your email is <b>{email}</b>.</p>
            <PostForm acc={acc} message={message}/>
          </div>
        </main>
    )
  }
}