import { colors } from '@src/styles/constantsStyle';
const buttonLight = {
  backgroundColor: colors.primary,
  color: colors.default,
  '&:hover': {
    backgroundColor: colors.hover.primary,
  },
  '&.Mui-disabled': {
    backgroundColor: colors.disabled.primary,
    color: colors.disabled.default,
  },
};

const buttonDark = {
  backgroundColor: colors.dark.primary,
  color: colors.dark.default,
  '&:hover': {
    backgroundColor: colors.hover.dark.primary,
  },
  '&.Mui-disabled': {
    backgroundColor: colors.disabled.dark.primary,
    color: colors.disabled.dark.default,
  },
};

const buttonIcons = {
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
  },
};

export const THEME_STYLES = {
  light: {
    ...buttonLight,
    ...buttonIcons,
  },
  dark: {
    ...buttonDark,
    ...buttonIcons,
  },
} as const;
