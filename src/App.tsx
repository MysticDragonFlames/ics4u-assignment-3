import { useRef, useState, useEffect, useMemo } from "react"
import { Header } from "@ics4u-assignment-03/components/Header";
import { Footer } from "@ics4u-assignment-03/components/Footer"
import { Inputs } from "@ics4u-assignment-03/components/Inputs"
import { Analysis} from "@ics4u-assignment-03/components/Analysis"
import type { Results } from "./types";



export const AppInputs = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [results, setResults] = useState<Results | null>(null);
  return {a, b, c, d, setA, setB, setC, setD}

}

export const App = () => {

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <main className="space-y-12">
        <Inputs />
        <div className="grid grid-cols-2 gap-12">
          <Analysis />
        </div>
        </main>
        <Footer />
      </div>
      
    </div>
  );
};
