import { Button as MuiButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './ButtonProps';
import { THEME_STYLES } from './constants';
import { useDarkTheme } from '@src/providers/DarkThemeProvider/DarkThemeContext';
export default function GenericButton(props: ButtonProps) {
  const { icon, loading, children, disabled, iconPosition = 'left' } = props;

  const { theme } = useDarkTheme();
  const styleButton = THEME_STYLES(theme);
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
      sx={{ ...styleButton, ...props.sx }}
    >
      {loadingIndicator}
      {children}
    </MuiButton>
  );
}
