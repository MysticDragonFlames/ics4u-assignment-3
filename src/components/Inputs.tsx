/** biome-ignore-all assist/source/useSortedAttributes: <no> */
/** biome-ignore-all assist/source/organizeImports: <no> */
import type { Coefficients, Changes } from "@ics4u-assignment-03/types"
import type { SyntheticEvent } from "react"

type Props =  {
    numberTravel: (value: Coefficients) => void
    a: string
    b: string
    c: string
    d: string
} 
export const Inputs = ({a, b, c, d, aChange, bChange, cChange, dChange, numberTravel}:  Changes & Props) => {
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        numberTravel({a: Number(a), b: Number(b), c: Number(c), d: Number(d)})
        
    }
    return (
        
        <section className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f19] p-6 shadow-2xl">
            <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
            <form onSubmit={handleSubmit}
            id="form" className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-1 flex-wrap justify-start gap-4 sm:gap-6">
                    <label className="group flex flex-col gap-1.5">
                        <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">a-value [x³]</span>
                        <input
                            name="a"
                            value={a}
                            id="a"
                            onChange={(event) => aChange(event.target.value)}
                            className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
                        />
                    </label>
                    <label className="group flex flex-col gap-1.5">
                        <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">b-value [x²]</span>
                        <input
                            name="b"
                            value={b}
                            id="b"
                            onChange={(event) => bChange(event.target.value)}
                            className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
                        />
                    </label>
                    <label className="group flex flex-col gap-1.5">
                        <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">c-value [x]</span>
                        <input
                            name="c"
                            value={c}
                            id="c"
                            onChange={(event) => cChange(event.target.value)}
                            className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
                        />
                    </label>
                    <label className="group flex flex-col gap-1.5">
                        <span className="font-mono text-slate-500 text-xs transition group-focus-within:text-cyan-400">d-value [c]</span>
                        <input
                            name="d"
                            value={d}
                            id="d"
                            onChange={(event) => dChange(event.target.value)}
                            className="w-24 rounded-md border border-slate-800 bg-[#121824] px-3 py-2 text-center font-mono text-white transition focus:border-cyan-500 focus:outline-none"
                        />
                    </label>
                </div>
                <input
                    type="submit"
                    value="SAVE"
                    className="w-full cursor-pointer self-end rounded-md bg-cyan-500 px-6 py-3 text-center font-bold font-mono text-[#07090e] text-xs tracking-wider shadow-cyan-500/10 shadow-lg transition duration-150 hover:bg-cyan-400 active:scale-95 sm:w-auto sm:self-auto"
                />
            </form>
        </section>
    )
}