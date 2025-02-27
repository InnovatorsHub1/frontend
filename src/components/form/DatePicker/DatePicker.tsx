import { ThemeProvider } from '@mui/material';
import { DatePicker as MUIDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { themeColors, getTheme } from './constants';
import { useContext } from 'react';
import { DarkThemeContext } from '@src/providers/DarkThemeProvider/DarkThemeContext';

export interface IDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label?: string;
  className?: string;
}

export default function DatePicker(props: IDatePickerProps) {
  const { label } = props;

  const { isDarkMode } = useContext(DarkThemeContext);

  const variant = isDarkMode ? 'dark' : 'light';

  const newTheme = getTheme(variant);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={newTheme}>
        <MUIDatePicker
          {...props}
          label={label}
          slotProps={{
            leftArrowIcon: {
              sx: {
                color: themeColors[variant].leftArrowColor,
              },
            },
            rightArrowIcon: {
              sx: {
                color: themeColors[variant].rightArrowColor,
              },
            },
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
