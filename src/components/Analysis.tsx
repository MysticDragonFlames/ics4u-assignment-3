import type { Coefficients } from "@ics4u-assignment-03/types"
import { calculateEverything } from "@ics4u-assignment-03/utils"

export const Analysis = ({a, b, c, d}:  Coefficients) => {
    const results = calculateEverything({a, b, c, d})
    return (
        
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">01 // Analysis</h2>
            </div>
            <div className="space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[p] parameter</span>
                    <span className="font-medium text-slate-200">{results.p}</span>
                    
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[q] parameter</span>
                    <span className="font-medium text-slate-200">{results.q}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[Δ] discriminant</span>
                    <span className="font-medium text-amber-400">{results.discriminant}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r1] root alpha</span>
                    <span className="font-medium text-emerald-400">x: {results.r1.x} | y: {results.r1.y}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r2] root beta</span>
                    <span className="font-medium text-emerald-400">x: {results.r2.x} | y: {results.r2.y}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[r3] root gamma</span>
                    <span className="font-medium text-emerald-400">x: {results.r3.x} | y: {results.r3.y}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[min] critical point</span>
                    <span className="font-medium text-cyan-400">x: {results.minimum.x} | y: {results.minimum.y}</span>
                </div>
                <div className="flex items-center justify-between border-slate-900 border-b px-1 py-3 transition hover:bg-slate-900/30">
                    <span className="text-slate-500">[max] critical point</span>
                    <span className="font-medium text-purple-400">x: {results.maximum.x} | y: {results.maximum.y}</span>
                </div>
            </div>
        </section>
    )
}