import Image from "next/image";
import {MessageCard} from "@/components/cards";
import {notFound} from "next/navigation";

export default function ClassPage({ params }: { params: {cl: string} }) {
  // safety: at(1) != undefined because params.cl.length == 2 is guaranteed to be true
  if(params.cl.length != 2 || !params.cl.startsWith("4") || !["A", "B", "C", "D", "E"].includes(params.cl.at(1)!)) {
    notFound()
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Build&nbsp;<code className="font-mono font-bold">14f3c5</code>
          </p>
          <div
              className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://gsn.bz"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src="/gsn.svg"
                  alt="GSN"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
              />
            </a>
          </div>
        </div>

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
          <MessageCard name="Foo bar" desc="Test 1234"/>
          <MessageCard name="Gerard Sayson" desc="A notable class"/>
          <MessageCard name="Santos Jr" desc="A notable class"/>
        </div>
      </main>
  );
}