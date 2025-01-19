import React from 'react';
import { 
  TextField,
  InputAdornment,
  FormControl,
  FormHelperText,
  IconButton,
  Typography,
  Box
} from '@mui/material';
import { Clear } from '@mui/icons-material';
import { BaseInputProps } from '../shared/typs';

interface TextInputProps extends BaseInputProps {
  maxLength?: number;
  showCharacterCount?: boolean;
  clearable?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  labelPosition?: 'top' | 'left' | 'floating';
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
  maxLength,
  showCharacterCount = false,
  clearable = false,
  startIcon,
  endIcon,
  labelPosition = 'floating',
  sx,
  ...props
}) => {
  // Handle text change with maxLength constraint
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;
    onChange(newValue);
  };

  // Handle clear button click
  const handleClear = () => {
    onChange('');
  };

  // Configure input adornments
  const getStartAdornment = () => {
    if (!startIcon) return undefined;
    return (
      <InputAdornment position="start">
        {startIcon}
      </InputAdornment>
    );
  };

  const getEndAdornment = () => {
    const hasEndIcon = endIcon || (clearable && value);
    if (!hasEndIcon) return undefined;

    return (
      <InputAdornment position="end">
        {endIcon}
        {clearable && value && (
          <IconButton
            onClick={handleClear}
            edge="end"
            disabled={disabled}
            size="small"
            aria-label="clear input"
          >
            <Clear />
          </IconButton>
        )}
      </InputAdornment>
    );
  };

  // Container styles based on label position
  const containerStyles = {
    display: 'flex',
    flexDirection: labelPosition === 'left' ? 'row' : 'column',
    alignItems: labelPosition === 'left' ? 'center' : 'stretch',
    gap: labelPosition === 'left' ? 2 : 0,
    ...sx
  };

  return (
    <Box sx={containerStyles}>
      <FormControl
        error={!!error}
        disabled={disabled}
        required={required}
        fullWidth
      >
        <TextField
          label={labelPosition !== 'top' ? label : undefined}
          value={value}
          onChange={handleChange}
          error={!!error}
          disabled={disabled}
          required={required}
          variant="outlined"
          InputProps={{
            startAdornment: getStartAdornment(),
            endAdornment: getEndAdornment(),
          }}
          InputLabelProps={{
            shrink: labelPosition === 'floating' ? undefined : true,
          }}
          {...props}
        />
        
        {/* Helper text and character count container */}
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 0.5,
            px: 1
          }}
        >
          <FormHelperText 
            error={!!error}
            sx={{ margin: 0 }}
          >
            {error || helperText}
          </FormHelperText>
          
          {(showCharacterCount || maxLength) && (
            <Typography
              variant="caption"
              color={value.length === maxLength ? 'error' : 'textSecondary'}
              sx={{ flexShrink: 0 }}
            >
              {value.length}{maxLength ? `/${maxLength}` : ''} characters
            </Typography>
          )}
        </Box>
      </FormControl>
    </Box>
  );
};