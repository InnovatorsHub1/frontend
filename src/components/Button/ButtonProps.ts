export interface ButtonProps {
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
