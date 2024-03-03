import {ClassCard} from "@/components/cards";
import {auth} from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  return (
      <main className="flex min-h-screen flex-col items-center py-24 md:px-24 px-12">

        <div
            className="select-none relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1>
            <span className="font-bold align-left text-2xl md:text-3xl lg:text-4xl xl:text-6xl">Project</span><br/>
            <span
                className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-blue-300">Gratitude</span><br/>
            <span className="font-mono text-lg">PSS 2024</span>
          </h1>
        </div>

        <div className="flex-col justify-center align-center p-4 bg-zinc-800 rounded-md mt-8">
          {session != null ? (
              <>
                <p>Logged in as <b>{(session.user ?? {name: "no one"}).name}</b>.</p>
                <Link href="/post/" className="text-blue-400 hover:cursor-pointer border-b border-b-zinc-700 hover:border-b-blue-400 transition">Submit a note of gratitude!</Link>
              </>
          ) : (
              <p>Not logged in. Sign in to leave a message.</p>
          )}
        </div>

        <div className="my-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map(
              (x, index) => <ClassCard key={index} name={`4${x}`} desc="A notable class" url={`/class/4${x}`}/>
          )}
          <ClassCard name="Teachers" desc="Great people; form teachers should post for their respective classes" url="/class/4T"/>
        </div>
      </main>
  );
}
