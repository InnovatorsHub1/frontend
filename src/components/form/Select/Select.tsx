import { Autocomplete, TextField } from '@mui/material';

export type SelectOption = {
  id?: number;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  value?: SelectOption | SelectOption[] | null;
  onChange?: (value: SelectOption | SelectOption[] | null) => void;
  multiple?: boolean;
  groupBy?: (option: SelectOption) => string;
  renderOption?: (props: React.HTMLAttributes<HTMLLIElement>, option: SelectOption) => React.ReactNode;
  placeholder?: string;
}

export default function Select({
  options,
  value,
  onChange,
  multiple = false,
  groupBy,
  renderOption,
  placeholder = 'Search...',
}: SelectProps) {
  const handleChange = (_event: React.SyntheticEvent, newValue: SelectOption | SelectOption[] | null) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Autocomplete
      disablePortal
      options={options}
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
