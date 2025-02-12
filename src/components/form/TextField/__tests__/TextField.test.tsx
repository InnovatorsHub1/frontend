import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';

describe('TextField', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      name: 'test-field',
      placeholder: 'Enter text',
      type: 'text',
      className: 'custom-class',
      ...props,
    };
    return render(<TextField {...defaultProps} />);
  };

  describe('rendering', () => {
    it('renders input field with default props', () => {
      setup();
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('renders label from name prop', () => {
      setup({ name: 'Email' });
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('renders label from type when name is missing', () => {
      setup({ name: undefined, type: 'email' });
      expect(screen.getByText('email')).toBeInTheDocument();
    });

    it('renders help icon', () => {
      setup();
      expect(screen.getByTestId('HelpOutlineIcon')).toBeInTheDocument();
    });
  });

  describe('input types', () => {
    it('renders email field with icon', () => {
      setup({ type: 'email' });
      const input = screen.getByRole('textbox');
      expect(input.parentElement).toHaveClass('relative');
    });

    it('renders phone field with IL icon', () => {
      setup({ type: 'tel' });
      expect(screen.getByText('IL |')).toBeInTheDocument();
    });

    it('renders website field with http icon', () => {
      setup({ type: 'url' });
      expect(screen.getByText('http:// |')).toBeInTheDocument();
    });

    it('renders textarea for description', () => {
      setup({ name: 'description' });
      const textarea = screen.getByRole('textbox');
      expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });

    it('renders textarea for textarea type', () => {
      setup({ type: 'textarea' });
      const textarea = screen.getByRole('textbox');
      expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });
  });

  describe('styling', () => {
    it('applies website padding', () => {
      setup({ type: 'url' });
      expect(screen.getByRole('textbox')).toHaveClass('pl-18');
    });

    it('applies default padding', () => {
      setup({ type: 'email' });
      expect(screen.getByRole('textbox')).toHaveClass('pl-10');
    });

    it('applies custom class', () => {
      setup({ className: 'test-class' });
      expect(screen.getByRole('textbox')).toHaveClass('test-class');
    });
  });

  describe('behavior', () => {
    it('updates value on change', () => {
      setup();
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input).toHaveValue('test');
    });

    it('shows black text for non-empty input', () => {
      setup();
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.parentElement).toHaveClass('text-black-500');
    });

    it('shows gray text for empty input', () => {
      setup();
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '' } });
      expect(input.parentElement).toHaveClass('text-gray-500');
    });
  });
});
