import {Button} from '@mui/material';
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
    padding?:Number 
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
    className,
    type = 'button',
    ...props
  }: ButtonProps) {
    // Map custom props to MUI-compatible props
    const muiVariant = 
      variant === 'outlined' || variant === 'text' ? variant : 'contained';
    const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
    console.log('children:', children)
        return (
        <Button
          variant={muiVariant}
          size={muiSize}
          startIcon={iconPosition === 'left' && icon ? icon : undefined}
          endIcon={iconPosition === 'right' && icon ? icon : undefined}
          disabled={disabled || loading}
          fullWidth={fullWidth}
          onClick={onClick}
          className={className}
          type={type}
          {...props}
        >
          {loading ? loading : children}
        </Button>
      );
    }
