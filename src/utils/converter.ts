import { FactorsMap } from "./config";

export function convert(
  type: string,
  from: string,
  to: string,
  value: number
): number {
  const result = FactorsMap[type][from] * value;
  return result / FactorsMap[type][to];
}
