import { FormControlLabel, Radio } from '@mui/material';

interface IRadioButtonProps {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export default function RadioButton({ value, label, disabled = false }: IRadioButtonProps) {
  return (
    <FormControlLabel 
      value={value} 
      control={<Radio />} 
      label={label} 
      disabled={disabled} 
    />
  );
}
