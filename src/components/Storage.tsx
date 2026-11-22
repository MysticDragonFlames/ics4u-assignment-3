import type {History} from "@ics4u-assignment-03/types"

export const Storage = (data: {data:History}) => {
    return (
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">03 // History</h2>
            </div>
            
            <div id="history" className="space-y-2 overflow-y-auto custom-scrollbar flex-1 pr-2 font-mono text-xs text-slate-400">
                <h1 id ="message" className = "text-slate-500 text-sm italic">
                  No saved equations yet.
                </h1>


            </div>
        </section>
    )


}