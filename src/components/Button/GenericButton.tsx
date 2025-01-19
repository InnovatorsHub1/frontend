import { Button } from '@mui/material';
/*TODO: 
Day 1: section 2,3
*/
interface ButtonProps {
  // Core props
  variant: 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;

  // Optional features
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;

  //using with props by the way rest parmaters and spread opertaors into style inline 
  padding?: number | string;
  margin?: number | string;
  fontSize?: number | string;
  
  // Event handlers
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  // Customization
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function GenericButton({
  variant,
  size,
  children,
  icon,
  iconPosition,
  loading,
  disabled,
  fullWidth,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  // Map custom props to MUI-compatible props
  const muiVariant = variant === 'outlined' || variant === 'text' ? variant : 'contained';
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
  const sizeIcon = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
  console.log('children:', children);
  return (
    <Button
      variant={muiVariant}
      size={muiSize}
      startIcon={iconPosition === 'left' && icon ? icon : undefined}
      endIcon={iconPosition === 'right' && icon ? icon : undefined}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      style={{ ...props}}
      type={type}
    >
      {loading ? loading : children}
    </Button>
  );
}
