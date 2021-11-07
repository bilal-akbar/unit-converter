import React from 'react';
import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
import { UnitTypes } from '../constants/config';

const fullWidth: React.CSSProperties = {
    width: "100%"
};

export const UnitConverter: React.FunctionComponent = () => {

    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>(UnitTypes[0]);

    const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption<any> | undefined, index?: number | undefined): void => {
        if (item) setSelectedItem(item);
    };

    return (
        <Stack horizontalAlign='center' verticalAlign='center' className='Unit__Converter'>
            <Stack style={fullWidth}>
                <Stack.Item>
                    <Dropdown
                        selectedKey={selectedItem ? selectedItem.key : undefined}
                        onChange={onChange}
                        placeholder="Select an option"
                        options={UnitTypes}
                    />
                </Stack.Item>
            </Stack>
            <Stack >
                <Stack.Item></Stack.Item>
            </Stack>
        </Stack>
    );
};
