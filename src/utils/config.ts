import { IDropdownOption } from "@fluentui/react";

export const UnitTypes: IDropdownOption[] = [{ key: "length", text: "Length" }];

export const LengthUnits: IDropdownOption[] = [
  { key: "meter", text: "Meter" },
  { key: "kilometer", text: "Kilometer" },
  { key: "centimeter", text: "Centimeter" },
  { key: "millimeter", text: "Millimeter" },
  { key: "micrometer", text: "Micrometer" },
  { key: "nanometer", text: "Nanometer" },
  { key: "mile", text: "Mile" },
  { key: "yard", text: "Yard" },
  { key: "foot", text: "Foot" },
  { key: "inch", text: "Inch" },
];

export const UnitsMap: { [key: string]: IDropdownOption[] } = {
  length: LengthUnits,
};

export const FactorsMap: Record<string, Record<string, number>> = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    micrometer: 1e+6,
    nanometer: 1e+9,
    mile: 1609,
    yard: 1.094,
    foot: 3.281,
    inch: 39.37,
  },
};
