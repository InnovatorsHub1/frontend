import React, { useEffect, useRef } from 'react';
import {
  TextField,
  FormControl,
  FormHelperText,
  Box,
  Typography
} from '@mui/material';
import { BaseInputProps } from '../shared/typs';

interface TextAreaProps extends BaseInputProps {
  minRows?: number;
  maxRows?: number;
  autoResize?: boolean;
  maxLength?: number;
  showCharacterCount?: boolean;
  maxHeight?: number;
  labelPosition?: 'top' | 'left' | 'floating';
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled,
  required,
  minRows = 3,
  maxRows = 5,
  autoResize = true,
  maxLength,
  showCharacterCount = true,
  maxHeight,
  labelPosition = 'floating',
  placeholder,
  sx,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize functionality
  const adjustHeight = () => {
    const textarea = textAreaRef.current;
    if (!textarea || !autoResize) return;

    // Reset height to allow proper scroll height calculation
    textarea.style.height = 'auto';
    
    // Calculate new height
    let newHeight = textarea.scrollHeight;
    
    // Apply max-height constraint if specified
    if (maxHeight) {
      newHeight = Math.min(newHeight, maxHeight);
    }
    
    textarea.style.height = `${newHeight}px`;
  };

  // Adjust height on content change
  useEffect(() => {
    adjustHeight();
  }, [value, autoResize, maxHeight]);

  // Handle text change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    // Apply maxLength constraint if specified
    if (maxLength && newValue.length > maxLength) return;
    
    onChange(newValue);
  };

  // Get character count info
  const getCharacterCount = () => {
    const current = value.length;
    if (maxLength) {
      return `${current}/${maxLength} characters`;
    }
    return `${current} characters`;
  };

  // Calculate if we're nearing character limit
  const isNearingLimit = maxLength && value.length >= maxLength * 0.9;

  // Container styles based on label position
  const containerStyles = {
    display: 'flex',
    flexDirection: labelPosition === 'left' ? 'row' : 'column',
    alignItems: labelPosition === 'left' ? 'flex-start' : 'stretch',
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
          multiline
          minRows={minRows}
          maxRows={autoResize ? undefined : maxRows}
          placeholder={placeholder}
          variant="outlined"
          inputRef={textAreaRef}
          InputProps={{
            style: maxHeight ? {
              maxHeight: maxHeight,
              overflow: 'auto'
            } : undefined
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

          {showCharacterCount && (
            <Typography
              variant="caption"
              color={isNearingLimit ? 'warning.main' : 'text.secondary'}
              sx={{ flexShrink: 0 }}
            >
              {getCharacterCount()}
            </Typography>
          )}
        </Box>
      </FormControl>
    </Box>
  );
};

// Example usage:
/*
// Basic usage
<TextArea
  label="Description"
  value={description}
  onChange={setDescription}
  minRows={3}
  maxRows={5}
/>

// With auto-resize and max height
<TextArea
  label="Comments"
  value={comments}
  onChange={setComments}
  autoResize
  maxHeight={200}
  maxLength={500}
  helperText="Tell us what you think"
/>

// Minimal rows with character limit
<TextArea
  label="Short Bio"
  value={bio}
  onChange={setBio}
  minRows={2}
  maxLength={150}
  showCharacterCount
  helperText="Brief description of yourself"
/>
*/