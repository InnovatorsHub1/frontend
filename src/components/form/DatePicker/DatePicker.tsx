import { ThemeProvider } from '@mui/material';
import { DatePicker as MUIDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { themeColors, getTheme } from './constants';

export interface IDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function DatePicker(props: IDatePickerProps) {
  const { label, variant = 'light' } = props;

  const newTheme = getTheme(variant);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={newTheme}>
        <MUIDatePicker
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
