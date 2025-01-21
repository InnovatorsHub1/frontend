import { Button } from '@mui/material';
/*TODO: 
try: sx,focused
*/
interface ButtonProps {
  // Core props
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  active?: boolean|string;

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
  
  //using states
  backgroundColor?: string 
  color?: string
  
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
  iconPosition="left",
  loading,
  disabled,
  fullWidth,
  onClick,
  type = 'button',
  // className,
  ...props
}: ButtonProps) {
  // Map custom props to MUI-compatible props
  const muiVariant = variant === 'outlined' || variant === 'text' ? variant : 'contained';
  //if we using with mui we can use in props with fullname and will not need this logic
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
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

      type={type}
      sx={{...props}}
    >
      {loading ? loading : children}
    </Button>
  );
}
