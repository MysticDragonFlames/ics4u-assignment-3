import { Analysis } from "@ics4u-assignment-03/components/Analysis";
import { DrawGraph } from "@ics4u-assignment-03/components/DrawGraph";
import { Footer } from "@ics4u-assignment-03/components/Footer";
import { Header } from "@ics4u-assignment-03/components/Header";
import { Inputs } from "@ics4u-assignment-03/components/Inputs";
import { Storage } from "@ics4u-assignment-03/components/Storage";
import { Summary } from "@ics4u-assignment-03/components/Summary";
import type { Coefficients, History } from "@ics4u-assignment-03/types";
import { useRef, useState } from "react";

export const App = () => {
  const copyChecker = useRef(new Set())
  const [stringA, setA] = useState("0");
  const [stringB, setB] = useState("0");
  const [stringC, setC] = useState("0");
  const [stringD, setD] = useState("0");
  const a = Number(stringA) || 0;
  const b = Number(stringB) || 0;
  const c = Number(stringC) || 0;
  const d = Number(stringD) || 0;

  const [storage, setStorage] = useState<History>([]);

  const handleSubmit = () => {
    const duplicate = `${a},${b},${c},${d}`;

    if (copyChecker.current.has(duplicate)) {
      return;
    }

    copyChecker.current.add(duplicate);
    setStorage((original) => [...original, { a, b, c, d, id: crypto.randomUUID() }]);
  };

  const handleDelete = (id: string) => {
    setStorage((prev) => prev.filter((item) => item.id !== id));
  };


  const handleLoad = (vars: Coefficients) => {
    setA(String(vars.a));
    setB(String(vars.b));
    setC(String(vars.c));
    setD(String(vars.d));
  };
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16">
        <Header />
        <main className="space-y-12">
          <Inputs a={stringA} aChange={setA} b={stringB} bChange={setB} c={stringC} cChange={setC} d={stringD} dChange={setD} numberTravel={handleSubmit} />
          <div className="grid grid-cols-2 gap-12">
            <Analysis a={a} b={b} c={c} d={d} />
            <Summary a={a} b={b} c={c} d={d} />
            <Storage data={storage} onDelete={handleDelete} onLoad={handleLoad} />
            <DrawGraph a={a} b={b} c={c} d={d} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
