import React from 'react';
import { RadioGroup as MUIRadioGroup, FormControl, FormLabel, RadioGroupProps } from '@mui/material';
import RadioButton from './RadioButton';
import styles from './RadioGroup.module.scss';

export interface IRadioGroupProps extends RadioGroupProps {
  options: { value: string | number; label: string }[];
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  styleClass?: string
}

export default function RadioGroup({ label, options, name, onChange, ...props }: IRadioGroupProps) {
  return (
    <div className={styles.radioGroup}>
      <FormControl className={styleClass}>
        {label && <FormLabel>{label}</FormLabel>}
        <MUIRadioGroup name={name} onChange={onChange} {...props}>
          {options.map((option) => (
            <RadioButton key={option.value} value={option.value} label={option.label} />
          ))}
        </MUIRadioGroup>
      </FormControl>
    </div>

  );
}