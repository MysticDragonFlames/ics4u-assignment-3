import type { Coefficients } from "@ics4u-assignment-03/types"
import { calculateEverything } from "@ics4u-assignment-03/utils"
export const Summary = ({ a, b, c, d }: Coefficients) => {
    const results = calculateEverything({ a, b, c, d })
    return (
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                {/** biome-ignore lint/suspicious/noCommentText: <its fine brochacho> */}
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">02 // Summary</h2>
            </div>
            <div className="space-y-1 font-mono text-xs">
                <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">f(x) expanded polynomial</span>
                    <span className="break-all text-slate-200 text-sm tracking-wide">{results.equation}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">f'(x) first derivative</span>
                    <span className="break-all text-cyan-400 text-sm tracking-wide">{results.firstDerivative}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">f''(x) second derivative</span>
                    <span className="break-all text-purple-400 text-sm tracking-wide">{results.secondDerivative}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">roots</span>
                    <span className="break-all text-emerald-400 text-sm tracking-wide">{results.roots}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-slate-900 bg-[#0b0f19]/40 p-4">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">factored form</span>
                    <span className="break-all text-sm text-white tracking-wide">{results.factored}</span>
                </div>
            </div>
        </section>

    )
}