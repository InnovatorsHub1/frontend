import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';

describe('TextField', () => {
  const defaultProps = {
    placeholder: 'Enter text',
    type: 'text',
    className: 'custom-class',
  };

  beforeEach(() => {
    render(<TextField {...defaultProps} />);
  });

  it('updates value on change', () => {
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
});
