import { InputAdornment, TextField as MUITextField, TextFieldProps } from '@mui/material';
import { getRemixIcon } from './constants';
import { colors } from '@src/styles/constantsStyle';
import { RiQuestionLine } from '@remixicon/react';
export interface ITextFieldProps extends Omit<TextFieldProps, 'className'> {
  errorMessage?: string;
  isError?: boolean;
}

export default function TextField(props: ITextFieldProps) {
  const { name, type, errorMessage, isError, placeholder, multiline, rows } = props;

  const iconComponent = getRemixIcon(type, name);
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
                      {iconComponent}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <RiQuestionLine size={20} />
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
