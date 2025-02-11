import { Switch as MUISwitch, SwitchProps } from '@mui/material';
import styles from './Switch.module.scss';

export interface ISwitchProps extends SwitchProps {
  className?: string;
}

export default function Switch({ className, ...props }: ISwitchProps) {
  return (
    <div className={styles.switchWrapper}>
      <MUISwitch className={className} {...props} />
    </div>
  );
}