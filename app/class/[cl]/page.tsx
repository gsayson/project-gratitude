import {MessageCard} from "@/components/cards";
import {notFound} from "next/navigation";
import {sql} from "@vercel/postgres";
import {PGMessage} from "@/common/types";

export default async function ClassPage({ params }: { params: {cl: string} }) {
  // safety: at(1) != undefined because params.cl.length == 2 is guaranteed to be true
  if(params.cl.length != 2 || !params.cl.startsWith("4") || !["A", "B", "C", "D", "E", "F", "G", "H", "I"].includes(params.cl.at(1)!)) {
    notFound()
  }
  const { rows } = await sql`SELECT * from RESPONSES where class=${params.cl}`
  const responses = rows.map(row => row as PGMessage)
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div
            className="select-none relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1>
            <span className="font-bold align-left text-2xl md:text-3xl lg:text-4xl xl:text-6xl">Class</span><br/>
            <span
                className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-blue-500 dark:text-blue-300">{params.cl}</span><br/>
            <span className="font-mono text-lg">of 2024</span>
          </h1>
        </div>

        <div className="mt-16 mb-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {responses.map((x, index) => {
            return <MessageCard desc={x.message} key={index}/>
          })}
        </div>
      </main>
  );
}