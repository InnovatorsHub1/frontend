import { Radio } from '@mui/material';

export interface optionRadio {
  value: string | number;
  label: string;
}
export default function RadioButton(props: optionRadio) {
  return <Radio {...props} />;
}
