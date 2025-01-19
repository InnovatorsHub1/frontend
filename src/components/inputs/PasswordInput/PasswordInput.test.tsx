import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';

describe('PasswordInput Component', () => {
  const defaultProps = {
    label: 'Password',
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders with label', () => {
      render(<PasswordInput {...defaultProps} />);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });

    test('renders with helper text', () => {
      render(<PasswordInput {...defaultProps} helperText="Help text" />);
      expect(screen.getByText('Help text')).toBeInTheDocument();
    });

    test('renders with error state', () => {
      render(<PasswordInput {...defaultProps} error="Error message" />);
      expect(screen.getByText('Error message')).toBeInTheDocument();
      const input = screen.getByLabelText('Password');
      expect(input.closest('.MuiInputBase-root')).toHaveClass('Mui-error');
    });


    test('renders as disabled', () => {
      render(<PasswordInput {...defaultProps} disabled />);
      const input = screen.getByLabelText('Password');
      expect(input).toBeDisabled();
    });
  });

  describe('Password Visibility Toggle', () => {
    test('toggles password visibility when button is clicked', () => {
      render(<PasswordInput {...defaultProps} />);
      const input = screen.getByLabelText('Password');
      const toggleButton = screen.getByLabelText('show password');

      expect(input).toHaveAttribute('type', 'password');
      
      fireEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'text');
      
      fireEvent.click(toggleButton);
      expect(input).toHaveAttribute('type', 'password');
    });

    test('visibility toggle is disabled when input is disabled', () => {
      render(<PasswordInput {...defaultProps} disabled />);
      const toggleButton = screen.getByLabelText('show password');
      expect(toggleButton).toBeDisabled();
    });
  });

  describe('Password Strength Indicator', () => {
    test('shows no strength indicator when password is empty', () => {
      render(<PasswordInput {...defaultProps} showPasswordStrength />);
      expect(screen.queryByText('Password Strength:')).not.toBeInTheDocument();
    });

    test('shows strength indicator when password is entered', () => {
      render(<PasswordInput {...defaultProps} value="Test123!" showPasswordStrength />);
      expect(screen.getByText('Password Strength:')).toBeInTheDocument();
    });

    test('updates strength indicator based on password complexity', () => {
      const { rerender } = render(
        <PasswordInput {...defaultProps} value="a" showPasswordStrength />
      );
      expect(screen.getByText('Weak')).toBeInTheDocument();

      rerender(
        <PasswordInput {...defaultProps} value="Test123!" showPasswordStrength />
      );
      expect(screen.getByText('Strong')).toBeInTheDocument();
    });

    test('hides strength indicator when showPasswordStrength is false', () => {
      render(
        <PasswordInput 
          {...defaultProps} 
          value="Test123!" 
          showPasswordStrength={false} 
        />
      );
      expect(screen.queryByText('Password Strength:')).not.toBeInTheDocument();
    });
  });

  describe('Password Requirements', () => {
    test('shows default requirements list when enabled', () => {
      render(<PasswordInput {...defaultProps} showRequirements />);
      expect(screen.getByText('At least 8 characters')).toBeInTheDocument();
      expect(screen.getByText('Contains uppercase letter')).toBeInTheDocument();
      expect(screen.getByText('Contains lowercase letter')).toBeInTheDocument();
      expect(screen.getByText('Contains number')).toBeInTheDocument();
      expect(screen.getByText('Contains special character')).toBeInTheDocument();
    });
  });

  

  describe('Label Position', () => {
    test('renders with left label position', () => {
      render(<PasswordInput {...defaultProps} labelPosition="left" />);
      const boxRoot = document.querySelector('.MuiBox-root');
      expect(boxRoot).toHaveStyle({ flexDirection: 'row' });
    });

  
    test('renders with floating label position', () => {
      render(<PasswordInput {...defaultProps} labelPosition="floating" />);
      const label = document.querySelector('.MuiInputLabel-root');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('Password');
    });
  });
});