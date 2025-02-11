// import React from 'react';
import clsx from 'clsx';
import { DatePicker as MUIDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export interface IDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label?: string;
  className?: string;
}

export default function DatePicker({ label, className, ...props }: IDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="p-5">
        <MUIDatePicker
          {...props}
          slotProps={{
            textField: {
              label,
              className: clsx(
                ' h-8 cursor-pointer rounded-md  p-1 hover:border-blue-500 focus:border-pink-600 dark:bg-slate-900',
                className
              ),
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
