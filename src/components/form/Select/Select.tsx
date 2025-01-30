import React, { useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

interface SelectOption {
  label: string;
  value: string;
  group?: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  groupBy?: (option: SelectOption) => string;
  searchable?: boolean;
  maxSelected?: number;
  renderOption?: (option: SelectOption) => React.ReactNode;
}

export default function Select(props: SelectProps) {
  const {
    options,
    value,
    onChange,
    multiple = false,
    groupBy,
    searchable = false,
    maxSelected,
    renderOption,
  } = props;

  const isMultiple = multiple && Array.isArray(value);

  const enhancedOptions =
    multiple && !maxSelected
      ? [{ label: "Select All", value: "select_all" }, ...options]
      : options;

  useEffect(() => {
    console.log("Value:", value);
  }, [value]);

  return (
    <Autocomplete
      options={enhancedOptions}
      multiple={multiple}
      groupBy={groupBy}
      value={
        isMultiple
          ? options.filter((option) => (value as string[]).includes(option.value))
          : options.find((option) => option.value === value) || null
      }
      inputValue={
        !multiple && !searchable
          ? options.find((option) => option.value === value)?.label || ""
          : undefined
      }
      filterSelectedOptions={multiple}
      onChange={(event, newValue) => {
        if (multiple) {
          const selectedValues = (newValue as SelectOption[]).map((option) => option.value);

          if (selectedValues.includes("select_all")) {
            const allValues = options.map((option) => option.value);
            onChange(allValues);
          } else {
            if (maxSelected && selectedValues.length > maxSelected) {
              return;
            }
            onChange(selectedValues);
          }
        } else {
          onChange((newValue as SelectOption)?.value || "");
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select an option" placeholder={searchable ? "Search..." : ""} />
      )}
      disableCloseOnSelect={multiple}
      clearOnEscape
      disableClearable={false}
      freeSolo={false} 
    />
  );
}

