import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { ButtonProps } from './ButtonProps';

const styles = {
  base: 'rounded-md font-medium transition-all duration-200',
  variants: {
    primary: 'text-primary dark:dark-text-primary bg-primary dark:dark-bg-primary hover:bg-primary-600',
    secondary: 'text-secondary dark:dark-text-secondary bg-secondary dark:dark-bg-secondary hover:bg-secondary-600',
    outlined: 'border-2 border-current bg-transparent',
    text: 'bg-transparent hover:bg-gray-100',
    link: 'bg-transparent text-blue-500 hover:underline',
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
  state: {
    active: 'bg-pink-500 text-red-500',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
};

export default function GenericButton(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    iconPosition = 'left',
    loading,
    isActive = false,
    className,
  } = props;
  const buttonClasses = clsx(
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    {
      [styles.state.active]: isActive,
    },
    className,
  );

  const muiVariant = variant === 'outlined' || variant === 'text' ? variant : 'contained';
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  return (
    <Button
      {...props}
      variant={muiVariant}
      size={muiSize}
      startIcon={iconPosition === 'left' && icon}
      endIcon={iconPosition === 'right' && icon}
      className={buttonClasses}
    >
      {loading && <CircularProgress size={20} color='inherit' sx={{ mr: children ? 1 : 0 }} />}
      {children}
    </Button>
  );
}
