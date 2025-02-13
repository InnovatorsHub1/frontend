import { Checkbox as MUICheckbox, CheckboxProps } from '@mui/material';

export interface ICheckboxProps extends CheckboxProps {
  label?: string;
  className?: string;
}

export default function Checkbox(props: ICheckboxProps) {
  const { className, ...propsCheckbox } = props;
  return (
    <div>
      <MUICheckbox className={className} {...propsCheckbox} />
    </div>
  );
}
