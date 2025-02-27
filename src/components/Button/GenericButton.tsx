import { Button as MuiButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './ButtonProps';
import { VARIANT_STYLES } from './constants';

export default function GenericButton(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    iconPosition = 'left',
    loading = false,
    className = '',
    icon,
    disabled = false,
  } = props;
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
  const muiVariant = variant === 'outlined' ? 'outlined' : 'contained';

  const combinedClassName = [className, loading ? 'loading' : ''].filter(Boolean).join(' ');
  const buttonStyles = {
    textTransform: 'none',
    borderRadius: '6px',
    boxShadow: 'none',
    fontWeight: 500,
    position: 'relative',
    ...VARIANT_STYLES[variant],
    '&:hover': {
      boxShadow: 'none',
      ...VARIANT_STYLES[variant]['&:hover'],
    },
  };

  const loadingIndicator = loading && (
    <CircularProgress
      size={20}
      color='inherit'
      sx={{
        marginRight: children ? '8px' : 0,
        color: variant === 'outlined' ? 'rgb(72, 143, 102)' : 'inherit',
      }}
    />
  );
  return (
    <MuiButton
      {...props}
      variant={muiVariant}
      size={muiSize}
      disabled={disabled || loading}
      startIcon={iconPosition === 'left' && !loading ? icon : undefined}
      endIcon={iconPosition === 'right' && !loading ? icon : undefined}
      className={combinedClassName}
      sx={buttonStyles}
    >
      {loadingIndicator}
      {children}
    </MuiButton>
  );
}
