import { colorsDefine } from '../../styles/constantsStyle';

const { primary, secondary, accent } = colorsDefine?.colors || {};
const { primary: rgbaPrimary, secondary: rgbaSecondary, default: rgbaDefault } = colorsDefine?.colors.rgba || {};
const { primary: disabledPrimary, secondary: disabledSecondary } = colorsDefine?.colors.disabled || {};

const {primary: darkPrimary,secondary: darkSecondary,background: darkBackground,
} = colorsDefine?.colors.dark || {};
const { primary: darkRgbaPrimary } = colorsDefine?.colors.rgba.dark || {};
const { primary: darkDisabledPrimary, secondary: darkDisabledSecondary } = colorsDefine?.colors.disabled.dark || {};

const formatBorder = (color: string | undefined) => `2px solid ${color}`;

export const VARIANT_STYLES = {
  primary: {
    backgroundColor: primary,
    color: accent,
    '&:hover': {
      backgroundColor: rgbaPrimary,
    },
    '&.Mui-disabled': {
      backgroundColor: disabledPrimary,
      color: accent,
    },
  },
  secondary: {
    backgroundColor: secondary,
    color: primary,
    border: formatBorder(primary),
    '&:hover': {
      backgroundColor: rgbaSecondary,
    },
    '&.Mui-disabled': {
      backgroundColor: disabledSecondary,
      color: primary,
    },
  },
  outlined: {
    border: formatBorder(primary),
    backgroundColor: 'transparent',
    color: primary,
    '&:hover': {
      backgroundColor: rgbaPrimary,
      border: formatBorder(primary),
      color: accent,
    },
    '&.Mui-disabled': {
      border: formatBorder(disabledPrimary),
      color: disabledPrimary,
    },
  },
  dark: {
    primary: {
      backgroundColor: darkPrimary,
      color: darkBackground,
      '&:hover': {
        backgroundColor: darkRgbaPrimary,
      },
      '&.Mui-disabled': {
        backgroundColor: darkDisabledPrimary,
        color: darkBackground,
      },
    },
    secondary: {
      backgroundColor: darkSecondary,
      color: darkPrimary,
      border: formatBorder(darkPrimary),
      '&:hover': {
        backgroundColor: rgbaDefault,
      },
      '&.Mui-disabled': {
        backgroundColor: darkDisabledSecondary,
        color: darkPrimary,
      },
    },
    outlined: {
      border: formatBorder(darkPrimary),
      backgroundColor: 'transparent',
      color: darkPrimary,
      '&:hover': {
        backgroundColor: darkRgbaPrimary,
        border: formatBorder(darkPrimary),
      },
      '&.Mui-disabled': {
        border: formatBorder(darkDisabledPrimary),
        color: darkDisabledPrimary,
      },
    },
  },
} as const;
