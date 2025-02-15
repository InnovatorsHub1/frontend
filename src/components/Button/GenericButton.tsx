import { Button } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  isActive?: boolean;
  sx?: SxProps<Theme>;
}

const styles = {
  base: 'rounded-md font-medium transition-all duration-200',
  variants: {
    primary: 'bg-black text-sky-400 hover:bg-gray-800',
    secondary: 'bg-sky-400 text-black hover:bg-sky-500',
    outlined: 'border-2 border-current bg-transparent',
    text: 'bg-transparent hover:bg-gray-100',
    link: 'bg-transparent text-blue-500 hover:underline'
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  },
  state: {
    active: 'bg-pink-500 text-red-500',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
    fullWidth: 'w-full'
  }
};

export default function GenericButton({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  isActive = false,
  fullWidth = false,
  className,
  sx,
  ...rest
}: ButtonProps) {
  const buttonClasses = clsx(
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    {
      [styles.state.active]: isActive,
      [styles.state.disabled]: disabled,
      [styles.state.loading]: loading,
      [styles.state.fullWidth]: fullWidth
    },
    className
  );

  const muiVariant = (variant === 'outlined' || variant === 'text') ? variant : 'contained';
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  return (
    <Button
      {...rest}
      variant={muiVariant}
      size={muiSize}
      startIcon={iconPosition === 'left' && icon}
      endIcon={iconPosition === 'right' && icon}
      disabled={disabled || loading}
      className={buttonClasses}
      sx={sx}
      onClick={onClick}
      type={type}
    >
      {loading && (
        <CircularProgress
          size={20}
          color="inherit"
          sx={{ mr: children ? 1 : 0 }}
        />
      )}
      {children}
    </Button>
  );
}