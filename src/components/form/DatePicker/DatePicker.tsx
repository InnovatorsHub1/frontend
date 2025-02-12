import { DatePicker as MUIDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export interface IDatePickerProps extends Omit<DatePickerProps<Date>, 'renderInput'> {
  label?: string;
  variant? : string;
}

export default function DatePicker({ label = "Pick a date", variant = "primary" , ...props}: IDatePickerProps) {

let  labelBg = "#488F66";
let layoutColor= "#3D3D3D";
let layoutBg = "#488F66";
let layoutBorderColor = "#3D3D3D";

if(variant === "secondary") {
  labelBg = "#6FCF97";
  layoutColor= "#3D3D3D";
  layoutBg = "#6FCF97";
  layoutBorderColor = "#3D3D3D";
 } 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="p-5">
        <MUIDatePicker
          {...props}
          slotProps={{
            textField: {
              label,
              sx: {
                backgroundColor: labelBg,
                borderRadius: "5px"
              }
            },    
            layout: {
              sx: { 
              color: layoutColor,
              border: `5px solid ${layoutBorderColor}`,
              backgroundColor: layoutBg,
              }
            },
            popper: {
              sx: {
                '&[aria-hidden="true"]': {
                  ariaHidden: 'false', // prevent inherit on mobile format
                },
              },
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
}




