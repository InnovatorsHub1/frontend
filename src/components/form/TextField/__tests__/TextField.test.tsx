import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';

describe('TextField', () => {
  const defaultProps = {
    name: 'test-field',
    placeholder: 'Enter text',
    type: 'text',
    className: 'custom-class',
  };

  beforeEach(() => {
    render(<TextField {...defaultProps} />);
  });

  it('renders label from name prop', () => {
    render(<TextField {...defaultProps} name="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders help icon', () => {
    expect(screen.getByTestId('HelpOutlineIcon')).toBeInTheDocument();
  });

  it('renders email field with icon', () => {
    render(<TextField {...defaultProps} type="email" />);
    const input = screen.getByRole('textbox');
    expect(input.parentElement).toHaveClass('relative');
  });

  it('updates value on change', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});