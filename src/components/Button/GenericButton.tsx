import { Button } from '@mui/material';

interface ButtonProps {
  // Core props
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;

  isActive?: boolean;

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
  backgroundColor?: string;
  color?: string;
  isActiveBackgroundColor?: string;
  isActiveAcolor?: string;

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
  iconPosition = 'left',
  loading,
  disabled,
  onClick,
  type,
  isActive,
  isActiveAcolor = 'red',
  isActiveBackgroundColor = 'pink',
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  let backgroundColor = props.backgroundColor;
  let color = props.color;

  if (variant === 'primary'&& !color&& !backgroundColor) {
    backgroundColor = 'black';
    color = 'skyblue';
  } else if (variant === 'secondary'&& !color&& !backgroundColor) {
    backgroundColor = 'skyblue';
    color = 'black';
  }


  if(type ==="submit"){
    backgroundColor = 'greenyellow';
    color ="green";
  }
  else if(type ==="reset"){
    backgroundColor = "orange";
    color ="pink";
  }

  const muiVariant = variant === 'outlined' || variant === 'text' ? variant : 'contained';
 

  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  return (
    <Button
      variant={muiVariant}
      size={muiSize}
      startIcon={iconPosition === 'left' && icon ? icon : undefined}
      endIcon={iconPosition === 'right' && icon ? icon : undefined}
      disabled={disabled || loading}
      sx={isActive ? { color: isActiveAcolor, backgroundColor: isActiveBackgroundColor } : { ...props, backgroundColor, color }}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      className={className}
    >
      {loading ? loading : children}
    </Button>
  );
}
