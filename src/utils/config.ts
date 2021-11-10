import { IDropdownOption } from "@fluentui/react";

export const UnitTypes: IDropdownOption[] = [
  { key: "length", text: "Length" },
  { key: "temperature", text: "Temperature" },
  { key: "area", text: "Area" },
];

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

export const TemperatureUnits: IDropdownOption[] = [
  { key: "celsius", text: "Celsius" },
  { key: "fahrenheit", text: "Fahrenheit" },
  { key: "kelvin", text: "Kelvin" },
];

export const AreaUnits: IDropdownOption[] = [
  { key: "square_meter", text: "Square meter" },
  { key: "square_centimeter", text: "Square Centimeter" },
  { key: "square_kilometer", text: "Square Kilometer" },
  { key: "square_foot", text: "Square Foot" },
  { key: "square_inch", text: "Square Inch" },
  { key: "square_mile", text: "Square Mile" },
  { key: "square_yard", text: "Square Yard" },
  { key: "acre", text: "Acre" },
  { key: "hectare", text: "Hectare" },
];

export const UnitsMap: { [key: string]: IDropdownOption[] } = {
  length: LengthUnits,
  temperature: TemperatureUnits,
  area: AreaUnits
};

export const FactorsMap: Record<string, Record<string, number>> = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    micrometer: 0.000001,
    nanometer: 1e-9,
    mile: 1609,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254,
  },
  temperature: {
    celsius: 1,
    fahrenheit: 0.555555555555,
    kelvin: 1,
  },
  area: {
    square_meter: 1,
    square_centimeter: 0.0001,
    square_kilometer: 1000000,
    square_foot: 0.09290304,
    square_inch: 0.00064516,
    square_mile: 2589988,
    square_yard: 0.8361274,
    acre: 4046.856,
    hectare: 10000,
  },
};

export const IncrementMap: Record<string, Record<string, number>> = {
  temperature: {
    celsius: 0,
    fahrenheit: -32,
    kelvin: -273.15,
  },
};
