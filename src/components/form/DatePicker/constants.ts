import { createTheme } from '@mui/material';
import { colors } from '@src/styles/constantsStyle';

export const themeColors = {
  light: {
    textFieldBg: colors.background,

    layoutColor: colors.default,
    layoutBg: colors.background,

    leftArrowColor: colors.primary,
    rightArrowColor: colors.primary,

    dayNameColor: colors.primary,
    dayNumColor: colors.default,
    daySelectedColor: colors.primary,
    daySelectedHover: colors.hover.primary,

    todayBorderColor: colors.default,

    inputLabelColor: colors.default,
    inputPHColor: colors.default,

    iconColor: colors.default,
  },
  dark: {
    textFieldBg: colors.dark.background,

    layoutColor: colors.dark.default,
    layoutBg: colors.dark.background,

    leftArrowColor: colors.dark.default,
    rightArrowColor: colors.dark.default,

    dayNameColor: colors.dark.primary,
    dayNumColor: colors.dark.default,
    daySelectedColor: colors.dark.primary,
    daySelectedHover: colors.hover.dark.primary,

    todayBorderColor: colors.dark.default,

    inputLabelColor: colors.dark.default,
    inputPHColor: colors.dark.default,

    iconColor: colors.dark.default,
  },
};

export const getTheme = (variant: string) => {
  const {
    layoutColor,
    layoutBg,
    textFieldBg,
    dayNameColor,
    dayNumColor,
    daySelectedColor,
    daySelectedHover,
    todayBorderColor,
    inputLabelColor,
    inputPHColor,
    iconColor,
  } = themeColors[variant];

  const newTheme = (theme: any) =>
    createTheme({
      ...theme,
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              backgroundColor: textFieldBg,
            },
          },
        },
        MuiPickersCalendarHeader: {
          styleOverrides: {
            label: {
              color: layoutColor,
            },
          },
        },
        MuiDayCalendar: {
          styleOverrides: {
            weekDayLabel: {
              color: dayNameColor,
              fontSize: 16,
            },
          },
        },
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              backgroundColor: layoutBg,
              borderRadius: 10,
            },
          },
        },
        MuiPickersDay: {
          styleOverrides: {
            root: {
              color: dayNumColor,
              '&.Mui-selected': {
                backgroundColor: daySelectedColor + ' !important',
                color: dayNumColor + ' !important',
                '&:hover': {
                  backgroundColor: daySelectedHover + ' !important',
                },
              },
            },
            today: {
              borderColor: todayBorderColor + ' !important',
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: inputPHColor + ' !important',
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            input: {
              color: inputLabelColor + ' !important',
              '::placeholder': {
                color: inputPHColor + '!important',
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              color: iconColor + ' !important',
            },
          },
        },
        MuiPickersPopper: {
          styleOverrides: {
            paper: {
              borderRadius: 10,
            },
          },
        },
      },
    });

  return newTheme;
};
