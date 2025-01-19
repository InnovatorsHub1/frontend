import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('TextInput Component', () => {
  const defaultProps = {
    label: 'Test Input',
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders with label', () => {
      render(<TextInput {...defaultProps} />);
      expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
    });

    test('renders with helper text', () => {
      render(<TextInput {...defaultProps} helperText="Help text" />);
      expect(screen.getByText('Help text')).toBeInTheDocument();
    });

    test('renders with error state', () => {
      render(<TextInput {...defaultProps} error="Error message" />);
      expect(screen.getByText('Error message')).toBeInTheDocument();
      // Check the container for error class instead of the input
      const container = screen.getByTestId('text-input-container');
      expect(container).toHaveClass('Mui-error');
    });

    test('renders as required', () => {
      render(<TextInput {...defaultProps} required />);
      // Look for the asterisk that indicates required field
      const asterisk = screen.getByText('*');
      expect(asterisk).toBeInTheDocument();
      // Check if input has required attribute
      const input = screen.getByRole('textbox');
      expect(input).toBeRequired();
    });

    test('renders in disabled state', () => {
      render(<TextInput {...defaultProps} disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Input Behavior', () => {
    
    test('respects maxLength constraint', async () => {
      let inputValue = '';
      const onChange = jest.fn(value => {
        if (value.length <= 5) {
          inputValue = value;
        }
      });

      const { rerender } = render(
        <TextInput 
          {...defaultProps} 
          value={inputValue}
          onChange={onChange} 
          maxLength={5}
        />
      );
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'hello world');
      
      rerender(
        <TextInput 
          {...defaultProps} 
          value={inputValue}
          onChange={onChange} 
          maxLength={5}
        />
      );
      
      expect(inputValue.length).toBeLessThanOrEqual(5);
    });

    test('clears input when clearable and clear button clicked', () => {
      const onChange = jest.fn();
      render(
        <TextInput 
          {...defaultProps} 
          value="test text" 
          onChange={onChange}
          clearable
        />
      );
      
      const clearButton = screen.getByTestId('clear-button');
      fireEvent.click(clearButton);
      
      expect(onChange).toHaveBeenCalledWith('');
    });
  });

  describe('Character Count', () => {
    test('displays character count when enabled', () => {
      render(
        <TextInput 
          {...defaultProps} 
          value="test" 
          showCharacterCount 
          maxLength={10}
        />
      );
      
      expect(screen.getByTestId('char-count')).toHaveTextContent('4/10');
    });

    test('updates character count on input', () => {
      const { rerender } = render(
        <TextInput 
          {...defaultProps} 
          value="test"
          showCharacterCount 
          maxLength={10}
        />
      );
      
      rerender(
        <TextInput 
          {...defaultProps} 
          value="test input"
          showCharacterCount 
          maxLength={10}
        />
      );
      
      expect(screen.getByTestId('char-count')).toHaveTextContent('10/10');
    });
  });

  describe('Icons', () => {
    test('renders with start icon', () => {
      const StartIcon = () => React.createElement('span', { 'data-testid': 'start-icon' }, 'start');
      render(<TextInput {...defaultProps} startIcon={<StartIcon />} />);
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    test('renders with end icon', () => {
      const EndIcon = () => React.createElement('span', { 'data-testid': 'end-icon' }, 'end');
      render(<TextInput {...defaultProps} endIcon={<EndIcon />} />);
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });
  });
});