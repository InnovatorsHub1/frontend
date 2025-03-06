import { HelpOutline } from '@mui/icons-material';
import { InputAdornment, TextField as MUITextField, TextFieldProps } from '@mui/material';
import { getInputIcon } from './constants';
import { colors } from '@src/styles/constantsStyle';

export interface ITextFieldProps extends Omit<TextFieldProps, 'className'> {
  errorMessage?: string;
  isError?: boolean;
}

export default function TextField(props: ITextFieldProps) {
  const { name, type, errorMessage, isError, placeholder, multiline, rows } = props;

  const inputIcon = getInputIcon(type, name);
  const colorError = { color: isError ? colors.error : '' };
  return (
    <div className={'flex flex-col'}>
      <MUITextField
        className={`rounded-md`}
        slotProps={
          !multiline
            ? {
                input: {
                  startAdornment: (
                    <InputAdornment position='start' sx={colorError}>
                      {inputIcon}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <HelpOutline sx={colorError} />
                    </InputAdornment>
                  ),
                },
              }
            : {}
        }
        sx={{
          '& .MuiInputBase-input': {
            ...colorError,
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.success,
                borderWidth: '2px',
              },
              '& .MuiInputAdornment-root': {
                color: colors.success,
              },
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.success,
            },
          },
        }}
        helperText={errorMessage}
        error={isError}
        name={name}
        type={type}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        {...props}
      />
    </div>
  );
}
