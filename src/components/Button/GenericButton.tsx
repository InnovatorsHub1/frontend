import { Button as MuiButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './ButtonProps';
import { brotliDecompress } from 'zlib';

const VARIANT_STYLES = {
  primary: {
    backgroundColor: 'rgb(72, 143, 102)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgb(58, 114, 82)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(72, 143, 102, 0.5)',
      color: '#fff',
    },
  },
  secondary: {
    backgroundColor: 'rgb(61, 61, 61)',
    color: 'rgb(72, 143, 102)',
    border: '2px solid rgb(72, 143, 102)',
    '&:hover': {
      backgroundColor: 'rgb(45, 45, 45)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(61, 61, 61, 0.5)',
      color: 'rgb(72, 143, 102)',
    },
  },
  outlined: {
    border: '2px solid rgb(72, 143, 102)',
    backgroundColor: 'transparent',
    color: 'rgb(72, 143, 102)',
    '&:hover': {
      backgroundColor: 'rgba(72, 143, 102, 0.05)',
      border: '2px solid rgb(72, 143, 102)',
    },
    '&.Mui-disabled': {
      border: '2px solid rgba(72, 143, 102, 0.5)',
      color: 'rgba(72, 143, 102, 0.5)',
    },
  },
  dark: {
    primary: {
      backgroundColor: '#6FCF97',
      color: '#11151F',
      '&:hover': {
        backgroundColor: 'rgba(111, 207, 151, 0.8)',
      },
      '&.Mui-disabled': {
        backgroundColor: 'rgba(111, 207, 151, 0.5)',
        color: '#11151F',
      },
    },
    secondary: {
      backgroundColor: '#3D3D3D',
      color: '#6FCF97',
      broder:'2px solid #6FCF97',
      '&:hover': {
        backgroundColor: 'rgb(45, 45, 45)',
      },
      '&.Mui-disabled': {
        backgroundColor: 'rgba(61, 61, 61, 0.5)',
        color: 'rgba(111, 207, 151, 0.5)',
      },
    },
    outlined: {
      border: '2px solid #6FCF97',
      backgroundColor: 'transparent',
      color: '#6FCF97',
      '&:hover': {
        backgroundColor: 'rgba(111, 207, 151, 0.05)',
        border: '2px solid #6FCF97',
      },
      '&.Mui-disabled': {
        border: '2px solid rgba(111, 207, 151, 0.5)',
        color: 'rgba(111, 207, 151, 0.5)',
      },
    },
  }
} as const;

export default function GenericButton(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    iconPosition = 'left',
    loading = false,
    isActive = false,
    className = '',
    icon,
    disabled = false,
  } = props;
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';
  const muiVariant = variant === 'outlined' ? 'outlined' : 'contained';

  const combinedClassName = [className, isActive ? 'active' : '', loading ? 'loading' : ''].filter(Boolean).join(' ');

  return (
    <MuiButton
      {...props}
      variant={muiVariant}
      size={muiSize}
      disabled={disabled || loading}
      startIcon={iconPosition === 'left' && !loading ? icon : undefined}
      endIcon={iconPosition === 'right' && !loading ? icon : undefined}
      className={combinedClassName}
      sx={{
        textTransform: 'none',
        borderRadius: '6px',
        boxShadow: 'none',
        fontWeight: 500,
        position: 'relative',
        ...VARIANT_STYLES[variant],
        ...(isActive && {
          backgroundColor: variant === 'outlined' ? 'rgba(72, 143, 102, 0.1)' : 'rgba(72, 143, 102, 0.9)',
        }),
        '&:hover': {
          boxShadow: 'none',
          ...VARIANT_STYLES[variant]['&:hover'],
        },
        ...props.sx,
      }}
    >
      {loading && (
        <CircularProgress
          size={20}
          color='inherit'
          sx={{
            marginRight: children ? '8px' : 0,
            color: variant === 'outlined' ? 'rgb(72, 143, 102)' : 'inherit',
          }}
        />
      )}
      {children}
    </MuiButton>
  );
}
