import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type Variant = 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
type Size = 'sm' | 'md' | 'lg';
export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: Variant;
  size?: Size;

  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';

  loading?: boolean;

  backgroundColor?: string;
  customColor?: string;

  isActive?: boolean;
  isActiveBackgroundColor?: string;
  isActiveAcolor?: string;

  className?: string;
}
