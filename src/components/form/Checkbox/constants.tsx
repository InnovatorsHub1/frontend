import { colors } from '@src/styles/constantsStyle';

export const THEME_STYLE = {
  light: {
    color: colors.default,
    '&.Mui-checked': {
      color: colors.primary,
    },
    '&.Mui-disabled': {
      color: colors.disabled.default,
    },
    '&.Mui-disabled.Mui-checked': {
      color: colors.disabled.primary,
    },
  },
  dark: {
    color: colors.dark.default,
    '&.Mui-checked': {
      color: colors.dark.primary,
    },
    '&.Mui-disabled': {
      color: colors.disabled.dark.default,
    },
    '&.Mui-disabled.Mui-checked': {
      color: colors.disabled.dark.primary,
    },
  },
};
