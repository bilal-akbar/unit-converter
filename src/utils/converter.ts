import BigNumber from "bignumber.js";

import { FactorsMap, IncrementMap } from "./config";

export function convert(
  type: string,
  from: string,
  to: string,
  value: string
): string {
  const num = new BigNumber(value);
  const factorFrom = new BigNumber(FactorsMap[type][from]);
  const factorTo = new BigNumber(FactorsMap[type][to]);
  let result: BigNumber;
  let baseResult: BigNumber;

  if (type === "temperature") {
    baseResult = num.plus(IncrementMap[type][from]);
  }
  baseResult = num.multipliedBy(factorFrom);
  result = baseResult.dividedBy(factorTo);

  if (type === "temperature") {
    result = result.minus(IncrementMap[type][to]);
  }

  return result.toString();
}
