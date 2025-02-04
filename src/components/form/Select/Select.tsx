import { Autocomplete, TextField } from '@mui/material';

export type SelectOption = {
    id: number;
    label: string;
    group?: string;
};

interface SelectProps {
    options: SelectOption[];
    value?: SelectOption | SelectOption[] | null;
    onChange: (value: SelectOption | SelectOption[] | null) => void;
    multiple?: boolean;
    groupBy?: (option: SelectOption) => string;
    searchable?: boolean;
    maxSelection?: number;
    renderOption?: (props: React.HTMLAttributes<HTMLLIElement>, option: SelectOption) => React.ReactNode;
    placeholder?: string;
}



export default function Select({
    options,
    value,
    onChange,
    multiple,
    groupBy,
    maxSelection,
    renderOption,
    placeholder = "Search...",
}: SelectProps) {

    //Sorting the options list for display in groups
    const sortedOptions = [...options].sort((a, b) =>
        (groupBy?.(a) || "").localeCompare(groupBy?.(b) || "")
    );

    // if in multiple mode - add "select all" option
    const selectAllOption: SelectOption = { label: "Select All", id: 0 };
    const optionsList = multiple && !maxSelection ? [selectAllOption, ...sortedOptions] : sortedOptions;

    const handleChange = (_event: React.SyntheticEvent, newValue: SelectOption | SelectOption[] | null) => {
        if (multiple) {
            const selectedValues = Array.isArray(newValue) ? newValue : [];
            const isSelectAllSelected = selectedValues.some((opt) => opt.id === 0);

            if (isSelectAllSelected) {
                onChange(sortedOptions);
            } else if(!maxSelection || selectedValues.length <= maxSelection){
                onChange(selectedValues);
            }
        } else {
            onChange(newValue);
        }
    };


    return (
        <Autocomplete
            disablePortal
            options={optionsList}
            value={value}
            onChange={handleChange}
            multiple={multiple}
            groupBy={groupBy}
            sx={{ width: 300 }}
            renderOption={(props, option) => (
                <li {...props} key={option.id}>
                    {renderOption ? renderOption(props, option) : option.label}
                </li>
            )}
            renderInput={(props) => <TextField {...props} label={placeholder} />}
        />
    );
}
