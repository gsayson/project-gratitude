import {PRightArrow} from "@/components/icons";
import {PGMessage} from "@/lib/types";

export function ClassCard(properties: { name: string, desc: string, url?: string }) {
    return <a
        href={properties.url}
        className="m-1 bg-zinc-800 group rounded-lg border px-4 py-4 border-transparent transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
    >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            {properties.name}&nbsp;
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <PRightArrow size={20}/>
            </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {properties.desc}
        </p>
    </a>
}

export function MessageCard({ message }: { message: PGMessage }) {
    return <div className="m-1 bg-zinc-800 group rounded-lg border border-transparent px-4 py-4 transition-colors dark:border-neutral-700 hover:bg-neutral-800/30">
        <h2 className={`text-sm mb-1`}><b>{message.nickname}</b><br/><span className="text-zinc-500">({message.email})</span></h2>
        <p className={`m-0 max-w-[30ch] text-sm`}>{message.response}</p>
    </div>
}