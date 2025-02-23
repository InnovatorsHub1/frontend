import { colors } from '@src/styles/constantsStyle';

export const THEME_STYLES = {
  light: {
    backgroundColor: colors.primary,
    color: colors.default,
    '&:hover': {
      backgroundColor: colors.hover.primary,
    },
    '&.Mui-disabled': {
      backgroundColor: colors.disabled.primary,
      color: colors.disabled.default,
    },
    '& .MuiButton-startIcon': {
      marginRight: '8px',
    },
    '& .MuiButton-endIcon': {
      marginLeft: '8px',
    },
  },
  dark: {
    backgroundColor: colors.dark.primary,
    color: colors.dark.default,
    '&:hover': {
      backgroundColor: colors.hover.dark.primary,
    },
    '&.Mui-disabled': {
      backgroundColor: colors.disabled.dark.primary,
      color: colors.disabled.dark.default,
    },
    '& .MuiButton-startIcon': {
      marginRight: '8px',
    },
    '& .MuiButton-endIcon': {
      marginLeft: '8px',
    },
  },

  
} as const;
