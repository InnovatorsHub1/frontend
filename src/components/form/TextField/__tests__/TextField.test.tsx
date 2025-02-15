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
    expect(screen.getByText('test-field')).toBeInTheDocument();
  });

  it('renders help icon', () => {
    expect(screen.getByTestId('HelpOutlineIcon')).toBeInTheDocument();
  });

  it('updates value on change', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});