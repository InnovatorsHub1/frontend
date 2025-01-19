export interface BaseInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    sx?: any; // You might want to use proper MUI sx type here
  }