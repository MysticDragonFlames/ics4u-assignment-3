import { useRef, useState, useEffect, useMemo } from "react"
import { Header, } from "@ics4u-assignment-03/components/Header";
import { Footer } from "@ics4u-assignment-03/components/Footer"
import { Inputs } from "@ics4u-assignment-03/components/Inputs"
import { Analysis} from "@ics4u-assignment-03/components/Analysis"
import { Summary } from "@ics4u-assignment-03/components/Summary"
import {Storage} from "@ics4u-assignment-03/components/Storage"
import type { Coefficients, History } from "@ics4u-assignment-03/types"

export const App = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    
    const [storage, setStorage] = useState<History>([])

    const handleSubmit = () => {
      setStorage((prev) => [...prev, {a, b, c, d, id: crypto.randomUUID()}])
    }
    console.log(storage)
  return (
    
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <main className="space-y-12">
        <Inputs
          a = {a}
          b = {b}
          c = {c}
          d = {d}

          aChange = {setA}
          bChange = {setB}
          cChange = {setC}
          dChange = {setD}

          numberTravel = {handleSubmit}
         />
        <div className="grid grid-cols-2 gap-12">
          <Analysis 
            a = {a}
            b = {b}
            c = {c}
            d = {d}
          />
          <Summary
            a = {a}
            b = {b}
            c = {c}
            d = {d}
          />
          <Storage
            data = {storage}
            
          />
        </div>
        </main>
        <Footer />
      </div>
      
    </div>
  );
}
