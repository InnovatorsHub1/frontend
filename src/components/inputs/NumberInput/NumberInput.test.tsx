import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberInput } from './NumberInput';

describe('NumberInput Component', () => {
  const defaultProps = {
    label: 'Test Number Input',
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders with label', () => {
      render(<NumberInput {...defaultProps} />);
      expect(screen.getByLabelText('Test Number Input')).toBeInTheDocument();
    });

    test('renders with helper text', () => {
      render(<NumberInput {...defaultProps} helperText="Help text" />);
      expect(screen.getByText('Help text')).toBeInTheDocument();
    });

    test('renders with error state', () => {
      render(<NumberInput {...defaultProps} error="Error message" />);
      expect(screen.getByText('Error message')).toBeInTheDocument();
      const container = screen.getByTestId('number-input-container');
      expect(container).toHaveClass('Mui-error');
    });

    test('renders as required', () => {
      render(<NumberInput {...defaultProps} required />);
      const input = screen.getByRole('spinbutton');
      expect(input).toBeRequired();
    });

    test('renders as disabled', () => {
      render(<NumberInput {...defaultProps} disabled />);
      const input = screen.getByRole('spinbutton');
      expect(input).toBeDisabled();
    });
  });

  describe('Input Behavior', () => {
    test('calls onChange with new value', async () => {
      render(<NumberInput {...defaultProps} />);
      const input = screen.getByRole('spinbutton');
      await userEvent.type(input, '10');
      expect(defaultProps.onChange).toHaveBeenCalledWith('1');
      expect(defaultProps.onChange).toHaveBeenCalledWith('0');
    });
    test('blocks non-numeric input', async () => {
      render(<NumberInput {...defaultProps} />);
      const input = screen.getByRole('spinbutton');
      await userEvent.type(input, 'abc');
      expect(defaultProps.onChange).not.toHaveBeenCalled();
    });

    test('respects min and max constraints', async () => {
      render(<NumberInput {...defaultProps} min={10} max={20} />);
      const input = screen.getByRole('spinbutton');
      
      await userEvent.type(input, '5');
      expect(defaultProps.onChange).not.toHaveBeenCalled();

      await userEvent.clear(input);
      await userEvent.type(input, '25');
      expect(defaultProps.onChange).not.toHaveBeenCalled();
    });
  });

  describe('Button Behavior', () => {
    test('increments value on button click', () => {
      render(<NumberInput {...defaultProps} value="10" step={2} />);
      const incrementButton = screen.getByTestId('increment-button');
      fireEvent.click(incrementButton);
      expect(defaultProps.onChange).toHaveBeenCalledWith('12');
    });

    test('decrements value on button click', () => {
      render(<NumberInput {...defaultProps} value="10" step={2} />);
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(decrementButton);
      expect(defaultProps.onChange).toHaveBeenCalledWith('8');
    });

    test('respects disabled state for buttons', () => {
      render(<NumberInput {...defaultProps} disabled />);
      const incrementButton = screen.getByTestId('increment-button');
      const decrementButton = screen.getByTestId('decrement-button');
      expect(incrementButton).toBeDisabled();
      expect(decrementButton).toBeDisabled();
    });
  });

  

  describe('Icons', () => {
    test('renders with increment and decrement icons', () => {
      render(<NumberInput {...defaultProps} />);
      const incrementButton = screen.getByTestId('increment-button');
      const decrementButton = screen.getByTestId('decrement-button');
      expect(incrementButton).toBeInTheDocument();
      expect(decrementButton).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    test('handles empty value as 0 for increment/decrement', () => {
      render(<NumberInput {...defaultProps} value="" />);
      const incrementButton = screen.getByTestId('increment-button');
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(incrementButton);
      expect(defaultProps.onChange).toHaveBeenCalledWith('1');
      fireEvent.click(decrementButton);
      expect(defaultProps.onChange).toHaveBeenCalledWith('-1');
    });

    test('respects min/max constraints with buttons', () => {
      render(<NumberInput {...defaultProps} value="10" min={10} max={10} />);
      const incrementButton = screen.getByTestId('increment-button');
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(incrementButton);
      fireEvent.click(decrementButton);
      expect(defaultProps.onChange).not.toHaveBeenCalled();
    });
  });
});