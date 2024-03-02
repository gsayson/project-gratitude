import {ClassCard} from "@/components/cards";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between py-24 md:px-24 px-12">

        <div
            className="select-none relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1>
            <span className="font-bold align-left text-2xl md:text-3xl lg:text-4xl xl:text-6xl">Project</span><br/>
            <span
                className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-blue-300">Gratitude</span><br/>
            <span className="font-mono text-lg">PSS 2024</span>
          </h1>
        </div>

        <div className="mt-16 mb-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <ClassCard name="4A" desc="A notable class" url="/class/4A"/>
          <ClassCard name="4B" desc="A notable class"/>
          <ClassCard name="4C" desc="A notable class"/>
          <ClassCard name="4D" desc="A notable class"/>
          <ClassCard name="4E" desc="A notable class"/>
          <ClassCard name="4F" desc="A notable class"/>
          <ClassCard name="4G" desc="A notable class"/>
          <ClassCard name="4H" desc="A notable class"/>
          <ClassCard name="4I" desc="A notable class"/>
        </div>
      </main>
  );
}
