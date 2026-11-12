import type { Results } from "@ics4u-assignment-03/types"

export const Analysis = () => {
    return (
        
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">01 // Analysis</h2>
            </div>
            <div className="space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[p] parameter</span>
                    <span className="font-medium text-slate-200">0.0000</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[q] parameter</span>
                    <span className="font-medium text-slate-200">0.0000</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[Δ] discriminant</span>
                    <span className="font-medium text-amber-400">0.0000</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r1] root alpha</span>
                    <span className="font-medium text-emerald-400">x: N/A | y: N/A</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r2] root beta</span>
                    <span className="font-medium text-emerald-400">x: N/A | y: N/A</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r3] root gamma</span>
                    <span className="font-medium text-emerald-400">x: N/A | y: N/A</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[min] critical point</span>
                    <span className="font-medium text-cyan-400">x: N/A | y: N/A</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[max] critical point</span>
                    <span className="font-medium text-purple-400">x: N/A | y: N/A</span>
                </div>
            </div>
        </section>
    )
}