import { Button as MuiButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './ButtonProps';
import { useTheme } from '../../hooks/useTheme';
import { THEME_STYLES } from './constants';

export default function GenericButton(props: ButtonProps) {
  const { icon, iconPosition = 'left', loading = false, children, disabled } = props;

  const theme = useTheme();

  const loadingIndicator = loading && (
    <CircularProgress
      size={20}
      color='inherit'
      sx={{
        marginRight: children ? '8px' : 0,
        color: 'inherit',
      }}
    />
  );

  return (
    <MuiButton
      {...props}
      disabled={disabled || loading}
      startIcon={iconPosition === 'left' && !loading ? icon : undefined}
      endIcon={iconPosition === 'right' && !loading ? icon : undefined}
      sx={THEME_STYLES[theme]}
    >
      {loadingIndicator}
      {children}
    </MuiButton>
  );
}
