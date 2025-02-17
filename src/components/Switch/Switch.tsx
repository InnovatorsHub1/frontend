import { Switch as MUISwitch, SwitchProps } from '@mui/material';

export interface ISwitchProps extends SwitchProps {
  className?: string;
}

export default function Switch({ className, ...props }: ISwitchProps) {
  return (
      <MUISwitch className={className} {...props} />
  );
}