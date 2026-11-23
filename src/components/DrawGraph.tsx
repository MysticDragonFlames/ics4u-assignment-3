import type { Coefficients } from "@ics4u-assignment-03/types";
import { calculateEverything, drawGraph } from "@ics4u-assignment-03/utils";
import { useEffect, useRef } from "react";

export const DrawGraph = ({ a, b, c, d }: Coefficients) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const results = calculateEverything({ a, b, c, d });

        drawGraph({ a, b, c, d }, results, canvas);
    }, [a, b, c, d]);

    return (
        <section className="flex max-h-140 flex-col space-y-6">
            <div className="flex items-center gap-4">
                {/** biome-ignore lint/suspicious/noCommentText: <allgood> */}
                <h2 className="font-bold font-mono text-slate-500 text-xs uppercase tracking-widest">04 // Graph</h2>
            </div>
            <div className="flex-1 rounded-xl border border-slate-900 bg-[#0b0f19]/50 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] p-6 shadow-2xl">
                <canvas
                    className="w-full rounded-md border border-slate-900 bg-[#04060a] shadow-inner"
                    height="400"
                    ref={canvasRef}
                    width="400"
                ></canvas>
            </div>
        </section>
    );
};
