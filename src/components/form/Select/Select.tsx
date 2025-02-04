import { Autocomplete, TextField } from '@mui/material';
import { useMemo } from 'react';

export type SelectOption = {
  id?: number; 
  label: string;
  group?: string;
};

interface SelectProps {
  options: SelectOption[];
  value: SelectOption | SelectOption[] | null;
  onChange: (value: SelectOption | SelectOption[] | null) => void;
  multiple?: boolean;
  groupBy?: (option: SelectOption) => string;
  renderOption?: (props: React.HTMLAttributes<HTMLLIElement>, option: SelectOption) => React.ReactNode;
  placeholder?: string;
}

export default function Select({
  options,
  value,
  onChange,
  multiple,
  groupBy,
  renderOption,
  placeholder = 'Search...',
}: SelectProps) {
  const sortedOptions = useMemo(() => {
    if (!groupBy) return options;

    return [...options].sort((a, b) => {
      const groupA = groupBy(a) || '';
      const groupB = groupBy(b) || '';

      const groupCompare = groupA.localeCompare(groupB);
      if (groupCompare !== 0) return groupCompare;

      return a.label.localeCompare(b.label);
    });
  }, [options, groupBy]);

  const handleChange = (_event: React.SyntheticEvent, newValue: SelectOption | SelectOption[] | null) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      options={sortedOptions}
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
      renderInput={(params) => <TextField {...params} label={placeholder} />}
    />
  );
}
