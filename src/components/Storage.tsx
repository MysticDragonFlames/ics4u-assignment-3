import type { History, Coefficients } from "@ics4u-assignment-03/types"

type Props = {
    onDelete: (value: string) => void
    data: History
    onLoad: (value: Coefficients) => void
}
export const Storage = ({ data, onDelete, onLoad }: Props) => {
    return (
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                {/** biome-ignore lint/suspicious/noCommentText: <all goodie> */}
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">03 // History</h2>
            </div>

            <div id="history" className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-2 font-mono text-slate-400 text-xs">
                <h1 id="message" className="text-slate-500 text-sm italic">
                    No saved equations yet.
                </h1>
                {data.map((item) => (
                    <div key={item.id} className="flex items-center gap-2">
                        <button onClick={() =>onLoad(item)} className="flex-1 rounded-xl border border-slate-700 bg-slate-800/40 p-3 text-left transition hover:bg-slate-800/70">
                            <div className="grid grid-cols-4 font-mono text-slate-200 text-sm">
                                <span className="text-center">{item.a}</span>
                                <span className="text-center">{item.b}</span>
                                <span className="text-center">{item.c}</span>
                                <span className="text-center">{item.d}</span>
                            </div>
                        </button>
                        <button onClick={()=> onDelete(item.id)} className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 font-medium text-red-400 text-xs transition hover:bg-red-500/20 hover:text-red-300">Delete</button>
                    </div>
                ))}
            </div>
        </section>
    )


}