import { EmailOutlined, HelpOutline } from '@mui/icons-material';
import { InputAdornment, TextField as MUITextField, TextFieldProps } from '@mui/material';

export interface ITextFieldProps extends Omit<TextFieldProps, 'className'> {
  className?: string;
  errorMessage?: string;
  isError?: boolean;
}

export default function TextField(props: ITextFieldProps) {
  const { className, name, type, errorMessage, isError, placeholder, multiline, rows } = props;

  return (
    <div className={'flex flex-col'}>
      <label className='pl-2 text-white'>{name || type}</label>
      <MUITextField
        className={`rounded-md ${className}`}
        slotProps={
          !multiline
            ? {
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <HelpOutline />
                    </InputAdornment>
                  ),
                },
              }
            : {}
        }
        helperText={errorMessage}
        error={isError}
        name={name}
        type={type}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
      />
    </div>
  );
}
