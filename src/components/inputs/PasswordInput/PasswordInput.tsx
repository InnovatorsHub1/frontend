import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  Box,
  LinearProgress,
  Typography,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Check,
  Close
} from '@mui/icons-material';
import { BaseInputProps } from '../shared/typs';

interface PasswordRequirement {
  label: string;
  validator: (value: string) => boolean;
}

interface PasswordInputProps extends BaseInputProps {
  showPasswordStrength?: boolean;
  showRequirements?: boolean;
  customRequirements?: PasswordRequirement[];
  labelPosition?: 'top' | 'left' | 'floating';
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
  showPasswordStrength = true,
  showRequirements = true,
  customRequirements,
  labelPosition = 'floating',
  sx,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Default password requirements
  const defaultRequirements: PasswordRequirement[] = [
    {
      label: 'At least 8 characters',
      validator: (value) => value.length >= 8
    },
    {
      label: 'Contains uppercase letter',
      validator: (value) => /[A-Z]/.test(value)
    },
    {
      label: 'Contains lowercase letter',
      validator: (value) => /[a-z]/.test(value)
    },
    {
      label: 'Contains number',
      validator: (value) => /[0-9]/.test(value)
    },
    {
      label: 'Contains special character',
      validator: (value) => /[^A-Za-z0-9]/.test(value)
    }
  ];

  const requirements = customRequirements || defaultRequirements;

  // Calculate password strength
  const getPasswordStrength = (): number => {
    if (!value) return 0;
    
    const passedRequirements = requirements.filter(req => req.validator(value));
    return (passedRequirements.length / requirements.length) * 100;
  };

  // Get color based on strength
  const getStrengthColor = (strength: number): string => {
    if (strength < 25) return 'error';
    if (strength < 50) return 'warning';
    if (strength < 75) return 'info';
    return 'success';
  };

  // Get strength label
  const getStrengthLabel = (strength: number): string => {
    if (strength < 25) return 'Weak';
    if (strength < 50) return 'Fair';
    if (strength < 75) return 'Good';
    return 'Strong';
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
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          error={!!error}
          disabled={disabled}
          required={required}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  disabled={disabled}
                  aria-label={showPassword ? 'hide password' : 'show password'}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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

        {/* Password strength indicator */}
        {showPasswordStrength && value && (
          <Box sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="caption">
                Password Strength:
              </Typography>
              <Typography 
                variant="caption"
                color={getStrengthColor(getPasswordStrength())}
              >
                {getStrengthLabel(getPasswordStrength())}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={getPasswordStrength()}
              color={getStrengthColor(getPasswordStrength()) as any}
            />
          </Box>
        )}

        {/* Password requirements */}
        {showRequirements && (
          <Box sx={{ mt: 1 }}>
            {requirements.map((req, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: 0.5
                }}
              >
                {req.validator(value) ? (
                  <Check fontSize="small" color="success" />
                ) : (
                  <Close fontSize="small" color="error" />
                )}
                <Typography variant="caption" color="textSecondary">
                  {req.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </FormControl>
    </Box>
  );
};

// Example usage:
/*
const customRequirements = [
  {
    label: 'Minimum 12 characters',
    validator: (value) => value.length >= 12
  },
  {
    label: 'Contains your name',
    validator: (value) => value.toLowerCase().includes('john')
  }
];

<PasswordInput
  label="Password"
  value={password}
  onChange={setPassword}
  showPasswordStrength
  showRequirements
  customRequirements={customRequirements} // Optional
  helperText="Enter your password"
  required
/>
*/