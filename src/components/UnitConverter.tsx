import React, { useEffect } from "react";
import { Stack, Dropdown, IDropdownOption, TextField } from "@fluentui/react";
import { UnitsMap, UnitTypes } from "../utils/config";
import { convert } from "../utils/converter";

const fullWidth: React.CSSProperties = {
  width: "100%",
};

export const UnitConverter: React.FunctionComponent = () => {
  const [type, setType] = React.useState<IDropdownOption>(UnitTypes[0]);
  const [subTypes, setSubTypes] = React.useState<IDropdownOption[]>(
    UnitsMap[type.key]
  );
  const [from, setFrom] = React.useState<IDropdownOption>(subTypes[0]);
  const [to, setTo] = React.useState<IDropdownOption>(subTypes[0]);
  const [inputLeft, setInputLeft] = React.useState("0");
  const [inputRight, setInputRight] = React.useState("0");

  const onTypeChange = (
    _event: React.FormEvent,
    item: IDropdownOption<any> | undefined
  ): void => {
    if (item) setType(item);
  };

  const onFromChange = (
    _event: React.FormEvent,
    item: IDropdownOption<any> | undefined
  ): void => {
    if (item) setFrom(item);
  };

  const onToChange = (
    _event: React.FormEvent,
    item: IDropdownOption<any> | undefined
  ): void => {
    if (item) setTo(item);
  };

  const onChangeInputLeft = React.useCallback(
    (_event, newValue?: string) => {
      setInputLeft(newValue || "");

      const unitType = String(type.key);
      const fromUnit = String(from.key);
      const toUnit = String(to.key);
      const value = Number(newValue || 0);
      const result = convert(unitType, fromUnit, toUnit, value);
      setInputRight(result.toFixed(3));
    },
    [type, to, from]
  );

  const onChangeInputRight = React.useCallback(
    (_event, newValue?: string) => {
      setInputRight(newValue || "");

      const unitType = String(type.key);
      const fromUnit = String(to.key);
      const toUnit = String(from.key);
      const value = Number(newValue || 0);
      const result = convert(unitType, fromUnit, toUnit, value);
      setInputLeft(result.toFixed(3));
    },
    [type, to, from]
  );

  useEffect(() => setSubTypes(UnitsMap[type.key]), [type]);

  useEffect(() => {
    setInputLeft("0");
    setInputRight("0");
  }, [type, from, to]);

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      className="Unit__Converter"
      style={fullWidth}
    >
      <Stack style={fullWidth} horizontal wrap tokens={{ childrenGap: 20 }}>
        <Stack.Item grow>
          <Dropdown
            selectedKey={type ? type.key : undefined}
            onChange={onTypeChange}
            placeholder="Select an option"
            options={UnitTypes}
          />
        </Stack.Item>
      </Stack>

      <br />

      <Stack style={fullWidth} horizontal wrap tokens={{ childrenGap: 20 }}>
        <Stack.Item grow>
          <Dropdown
            selectedKey={from ? from.key : undefined}
            onChange={onFromChange}
            placeholder="Select an option"
            options={subTypes}
          />
        </Stack.Item>
        <Stack.Item grow>
          <Dropdown
            selectedKey={to ? to.key : undefined}
            onChange={onToChange}
            placeholder="Select an option"
            options={subTypes}
          />
        </Stack.Item>
      </Stack>

      <br />

      <Stack style={fullWidth} horizontal wrap tokens={{ childrenGap: 20 }}>
        <Stack.Item grow>
          <TextField value={inputLeft} onChange={onChangeInputLeft} />
        </Stack.Item>
        <Stack.Item grow>
          <TextField value={inputRight} onChange={onChangeInputRight} />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
