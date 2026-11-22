import type { Coefficients, Results } from "@ics4u-assignment-03/types";
import { drawGraph, calculateEverything } from "@ics4u-assignment-03/utils"
import { useEffect } from "react";


export const DrawGraph = ({a, b, c, d}: Coefficients) => {
    const results = calculateEverything({a, b, c, d})
    useEffect
    drawGraph({a, b, c, d}, results, canvas)
}

    