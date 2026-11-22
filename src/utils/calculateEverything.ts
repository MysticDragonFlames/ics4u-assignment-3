import { drawGraph } from "@ics4u-assignment-03/utils";
import type { Coefficients, Results } from "@ics4u-assignment-03/types";
import { getSign } from "@ics4u-assignment-03/utils";
import { round } from "@ics4u-assignment-03/utils";

export const calculateEverything = ({ a, b, c, d }: Coefficients) => {

  const results: Results = {
    p: 0,
    q: 0,
    discriminant: 0,
    r1: { x: NaN, y: NaN },
    r2: { x: NaN, y: NaN },
    r3: { x: NaN, y: NaN },
    minimum: { x: NaN, y: NaN },
    maximum: { x: NaN, y: NaN },
    equation: `${a}x³ + ${b}x² + ${c}x + ${d}`, // Optional: adjust format as needed
    firstDerivative: `3(${a})x² + 2(${b})x + ${c}`,
    secondDerivative: `6(${a})x + 2(${b})`,
    roots: "N/A",
    factored: "No real factorization",
  };

  const p = (3 * a * c - b ** 2) / (3 * a ** 2);
  results.p = p;
  const q = (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
  results.q = q;
  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;
  results.discriminant = discriminant;

  const theta = (1 / 3) * Math.acos(-q / (2 * Math.sqrt((-(p / 3)) ** 3)));

  if (round(discriminant) > 0) {
    const root1 =
      Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3)) + Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3)) - (b / 3) * a;
    results.r1 = { x: round(root1), y: 0 };
    results.r2 = { x: "Imaginary", y: "Imaginary" };
    results.r3 = { x: "Imaginary", y: "Imaginary" };
    results.roots = "1 Real Root, 2 Complex Roots";
    results.factored = "No Real Factorization";


  } else if (round(discriminant) < 0) {
    const root1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const root2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) - b / (3 * a);
    const root3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) - b / (3 * a);
    results.r1 = { x: round(root1), y: 0 };
    results.r2 = { x: round(root2), y: 0 };
    results.r3 = { x: round(root3), y: 0 };
    results.roots = "3 Distinct Real Roots";
    results.factored = `${a}(x ${getSign(root1, true)} ${round(Math.abs(root1))})(x ${getSign(root2, true)} ${round(Math.abs(root2))})(x ${getSign(root3, true)} ${round(Math.abs(root3))})`;


  } else {
    if (Number.isNaN(p)) {
      results.r1 = { x: "N/A", y: "N/A" };
      results.r2 = { x: "N/A", y: "N/A" };
      results.r3 = { x: "N/A", y: "N/A" };
      results.roots = "N/A";
      results.factored = "No Real factorization";

    } else if (p !== 0) {
      const root1 = Math.cbrt(q / 2) - b / (3 * a);
      const root2 = -Math.cbrt(4 * q) - b / (3 * a);
      results.r1 = { x: round(root1), y: 0 };
      results.r2 = { x: round(root1), y: 0 };
      results.r3 = { x: round(root2), y: 0 };
      results.roots = "Double Real Roots, Single Real Root";
      results.factored = `${a}(x ${getSign(root1, true)} ${round(Math.abs(root1))})²(x${getSign(root2, true)} ${round(Math.abs(root2))})`;

    } else {
      const root1 =
        Math.cbrt(-q / 2 + Math.sqrt((q / 2) ** 2 + (p / 3) ** 3)) +
        Math.cbrt(-q / 2 - Math.sqrt((q / 2) ** 2 + (p / 3) ** 3)) -
        b / (3 * a);
      results.r1 = { x: round(root1), y: 0 };
      results.r2 = { x: round(root1), y: 0 };
      results.r3 = { x: round(root1), y: 0 };
      results.roots = "Triple Real Roots";
      results.factored = `${a}(x ${getSign(root1, true)} ${round(Math.abs(root1))})³`;

    }
    const derDiscrim = b ** 2 - 3 * a * c;

    if (derDiscrim > 0) {
      const sqrtD = Math.sqrt(derDiscrim);
      const x1 = (-b - sqrtD) / (3 * a);
      const x2 = (-b + sqrtD) / (3 * a);

      const y1 = a * x1 ** 3 + b * x1 ** 2 + c * x1 + d;
      const y2 = a * x2 ** 3 + b * x2 ** 2 + c * x2 + d;

      const der2Test = 6 * a * x1 + 2 * b;

      if (der2Test < 0) {
        results.maximum = { x: round(x1), y: round(y1) };
        results.minimum = { x: round(x2), y: round(y2) };
      } else {
        results.minimum = { x: round(x1), y: round(y1) };
        results.maximum = { x: round(x2), y: round(y2) };
      }
    }
    let expanded = `${a}x³`;
    let deriv1 = `${a * 3}x²`;
    let deriv2 = `${a * 6}x`;
    if (b !== 0) {
      expanded += ` ${getSign(b, false)} ${Math.abs(b)}x²`;
      deriv1 += ` ${getSign(b, false)} ${Math.abs(b * 2)}x`;
      deriv2 += ` ${getSign(b, false)} ${Math.abs(b * 2)}`;
      if (c !== 0) {
        expanded += ` ${getSign(c, false)}  ${Math.abs(c)}x`;
        deriv1 += ` ${getSign(c, false)} ${Math.abs(c)}`;
        if (d !== 0) {
          expanded += ` ${getSign(d, false)} ${d}`;
        }
      }
    }
    results.equation = expanded;
    results.firstDerivative = deriv1;
    results.secondDerivative = deriv2;
  }
  return results;
};
