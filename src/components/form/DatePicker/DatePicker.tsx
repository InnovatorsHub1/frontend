import { DatePicker as MUIDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export interface IDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function DatePicker(props: IDatePickerProps) {
  const { label, variant = 'primary' } = props;

  const variants = {
    primary: {
      labelBg: '#488F66',
      layoutColor: '#3D3D3D',
      layoutBg: '#488F66',
      layoutBorderColor: '#3D3D3D',
    },
    secondary: {
      labelBg: '#6FCF97',
      layoutColor: '#3D3D3D',
      layoutBg: '#6FCF97',
      layoutBorderColor: '#3D3D3D',
    },
  };
  const { labelBg, layoutColor, layoutBg, layoutBorderColor } = variants[variant];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='p-5'>
        <MUIDatePicker
          {...props}
          slotProps={{
            textField: {
              label,
              sx: {
                backgroundColor: labelBg,
                borderRadius: '5px',
              },
            },
            layout: {
              sx: {
                color: layoutColor,
                border: `5px solid ${layoutBorderColor}`,
                backgroundColor: layoutBg,
              },
            },
            popper: {
              sx: {
                '&[aria-hidden="true"]': {
                  ariaHidden: 'false',
                },
              },
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
