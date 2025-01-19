import React from 'react';
import { 
  TextField,
  InputAdornment,
  FormControl,
  FormHelperText,
  IconButton,
  Box,
  Tooltip
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { BaseInputProps } from '../shared/typs';

interface NumberInputProps extends BaseInputProps {
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  allowNegative?: boolean;
  formatValue?: (value: number) => string;
  labelPosition?: 'top' | 'left' | 'floating';
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
  min,
  max,
  step = 1,
  precision = 0,
  allowNegative = true,
  formatValue,
  labelPosition = 'floating',
  sx,
  ...props
}) => {
  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === '') {
      onChange('');
      return;
    }

    const numValue = parseFloat(newValue);
    if (isNaN(numValue)) return;
    
    if (min !== undefined && numValue < min) return;
    if (max !== undefined && numValue > max) return;
    if (!allowNegative && numValue < 0) return;
    
    onChange(newValue);
  };

  // Handle increment
  const handleIncrement = () => {
    const currentValue = value === '' ? 0 : parseFloat(value);
    if (isNaN(currentValue)) return;
    if (max !== undefined && currentValue + step > max) return;
    
    const newValue = (currentValue + step).toFixed(precision);
    onChange(newValue);
  };

  // Handle decrement
  const handleDecrement = () => {
    const currentValue = value === '' ? 0 : parseFloat(value);
    if (isNaN(currentValue)) return;
    if (min !== undefined && currentValue - step < min) return;
    if (!allowNegative && currentValue - step < 0) return;
    
    const newValue = (currentValue - step).toFixed(precision);
    onChange(newValue);
  };

  // Check button states
  const isDecrementDisabled = () => {
    if (disabled) return true;
    const currentValue = parseFloat(value || '0');
    return (min !== undefined && currentValue <= min) || 
           (!allowNegative && currentValue <= 0);
  };

  const isIncrementDisabled = () => {
    if (disabled) return true;
    const currentValue = parseFloat(value || '0');
    return max !== undefined && currentValue >= max;
  };

  // Container styles
  const containerStyles = {
    display: 'flex',
    flexDirection: labelPosition === 'left' ? 'row' : 'column',
    alignItems: labelPosition === 'left' ? 'center' : 'stretch',
    gap: labelPosition === 'left' ? 2 : 0,
    ...sx
  };

  return (
    <Box 
      sx={containerStyles} 
      data-testid="number-input-container"
      className={error ? 'Mui-error' : ''}
    >
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
          type="number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title={isDecrementDisabled() ? 'Minimum value reached' : 'Decrease'}>
                  <span>
                    <IconButton
                      onClick={handleDecrement}
                      size="small"
                      disabled={isDecrementDisabled()}
                      data-testid="decrement-button"
                      sx={{ mr: 1 }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={isIncrementDisabled() ? 'Maximum value reached' : 'Increase'}>
                  <span>
                    <IconButton
                      onClick={handleIncrement}
                      size="small"
                      disabled={isIncrementDisabled()}
                      data-testid="increment-button"
                      sx={{ ml: 1 }}
                    >
                      <AddIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </InputAdornment>
            ),
            inputProps: {
              min,
              max,
              step
            }
          }}
          InputLabelProps={{
            shrink: labelPosition === 'floating' ? undefined : true,
          }}
          {...props}
        />
        
        {/* Helper text container */}
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
        </Box>
      </FormControl>
    </Box>
  );
};

// Example usage:
/*
// Basic usage
<NumberInput
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={0}
  max={100}
  step={1}
/>

// With formatting
<NumberInput
  label="Price"
  value={price}
  onChange={setPrice}
  min={0}
  precision={2}
  formatValue={(num) => `$${num.toFixed(2)}`}
  helperText="Enter amount in dollars"
/>

// With custom step
<NumberInput
  label="Percentage"
  value={percentage}
  onChange={setPercentage}
  min={0}
  max={100}
  step={5}
  helperText="Increment by 5%"
/>
*/