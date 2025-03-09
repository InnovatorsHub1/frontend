import { Theme } from '@src/providers/DarkThemeProvider/DarkThemeContext';
import { colors } from '@src/styles/constantsStyle';

const buttonIcons = {
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
  },
};

export const THEME_STYLES = (theme: Theme) =>
  ({
    backgroundColor: theme === 'light' ? colors.primary : colors.dark.primary,
    color: theme === 'light' ? colors.default : colors.dark.default,
    '&:hover': {
      backgroundColor: theme === 'light' ? colors.hover.primary : colors.hover.dark.primary,
    },
    '&.Mui-disabled': {
      backgroundColor: theme === 'light' ? colors.disabled.primary : colors.disabled.dark.primary,
      color: theme === 'light' ? colors.disabled.default : colors.disabled.dark.default,
    },
    ...buttonIcons,
  }) as const;
