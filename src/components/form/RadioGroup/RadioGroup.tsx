import { RadioGroup as MUIRadioGroup, RadioGroupProps } from '@mui/material';
import RadioButton from './RadioButton';

export interface IRadioGroupProps extends RadioGroupProps {
  options: { value: string | number; label: string }[];
  label?: string;
}

export default function RadioGroup(props: IRadioGroupProps) {
  const { options, name } = props;
  return (
    <MUIRadioGroup name={name} {...props}>
      {options.map((option) => (
        <RadioButton key={option.value} value={option.value} label={option.label} />
      ))}
    </MUIRadioGroup>
  );
}
