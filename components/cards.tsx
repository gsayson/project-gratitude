import {PRightArrow} from "@/components/icons";

export function ClassCard(properties: { name: string, desc: string, url?: string }) {
    return <a
        href={properties.url}
        className="m-1 dark:bg-zinc-800 group rounded-lg border border-zinc-200 dark:border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

export function MessageCard(properties: { name: string, desc: string, url?: string }) {
    return <div className="m-1 dark:bg-zinc-800 group rounded-lg border border-zinc-200 dark:border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>{properties.name}&nbsp;</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{properties.desc}</p>
    </div>
}